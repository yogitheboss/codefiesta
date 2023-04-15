import cv2
import pytesseract
import numpy as np
from collections import Counter


pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

cascade = cv2.CascadeClassifier("haarcascade_russian_plate_number.xml")


coll = []
def extract_num(cap2):
    ret, img = cap2.read()

    while True:
        ret, img = cap.read()
        cv2.imshow("img", img)
        cv2.waitKey(1) & 0xFF == ord('q')
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        nplate = cascade.detectMultiScale(gray, 1.1, 4)
        for (x, y, w, h) in nplate:
            a,b = (int(0.02 * img.shape[0]), int(0.025 * img.shape[1]))
            plate = img[y + a:y + h - a, x:x + w - b, :]

            kernel = np.ones((1, 1), np.uint8)
            plate = cv2.dilate(plate, kernel, iterations=1)
            plate_gray = cv2.erode(plate, kernel, iterations=1)
            (thresh, plate) = cv2.threshold(plate_gray, 127, 255, cv2.THRESH_BINARY)

            read = pytesseract.image_to_string(plate)
            read = ''.join(e for e in read if e.isalnum())
            if read:
                if (len(read) == 10) & (read[6:10].isdigit()):
                    print (read)

        if not ret:
            break



cap = cv2.VideoCapture(0)
extract_num(cap)


