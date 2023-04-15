from flask import Flask, redirect, url_for, render_template
import cv2
import pytesseract
import numpy as np
from collections import Counter
from video import extract_num

app = Flask('__name __')


@app.route('/')
@app.route("/video")
def vdetec():
    cap = cv2.VideoCapture(0)
    read = extract_num(cap)
    render_template("test.html", num=read)


if __name__=="__main__":
    app.run(debug=True)