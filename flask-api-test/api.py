from flask import Flask
from flask_cors import CORS
import random as rd
app = Flask(__name__)
CORS(app)
'''
    flask 接收 API 的範例程式碼
    
'''


@app.route("/api/get/cnc")
def getX():
    return {
        "relative": {
            "x":round(rd.uniform(1,1000),3),
            "y": round(rd.uniform(1,1000),3),
            "z": round(rd.uniform(1,1000),3)
        },
        "absolute": {
            "x":round(rd.uniform(1,1000),3),
            "y": round(rd.uniform(1,1000),3),
            "z": round(rd.uniform(1,1000),3)
        },
        "machine": {
            "x":round(rd.uniform(1,1000),3),
            "y": round(rd.uniform(1,1000),3),
            "z": round(rd.uniform(1,1000),3)
        }
        
    }

@app.route("/api/get/y")
def getY():
    return {"y":round(rd.uniform(1,1000),3)}

@app.route("/api/get/z")
def getZ():
    return {"z":round(rd.uniform(1,1000),3)}

@app.route("/api/get/operation_status")
def getStatus():
    return {
        "row4col1":{
            "green": 1,
            "red": 0
        },
        "fastMoveRatio": 0,
        "inputRatio": 110,
        "rotatingSpdRatio": 100,
        "row1col2":{
            "programEdit": 0,
            "memoryExe": 0,
            "manualEdit": 0,
            "paperTapExe": 0,
            "handwheel": 0,
            "inching": 0,
            "impart": 1,
            "return2origin": 0
        },
        "row1col3":{
            "test":0 ,
            "singleExe": 1,
            "singleSkip": 0,
            "stopChoosing": 0,
            "mechanicalLock": 0,
            "reserved": 0
        },
        "row1col4":{
            "spindleLoading": 0,
            "spindleTurnRate": 0
        },
        "row2col2":{

        },
        "row2col4":{
            "spindleNum": 10,
            "waitedNum": 5
        },
        "row2col2":{
            "plus4": 0,
            "plusZ": 0,
            "minusY": 0,
            "plus5": 0,
            "plusX": 0,
            "fastMove": 0,
            "minusX": 0
        },
        "row2col3":{
            "blowCrumbs": 0,
            "programmingHandwheel": 0,
            "M54_resrved": 0,
            "openDoor": 0,
            "programRegen": 0,
            "M56_resrved": 0,
        },
        "row4col4": {
            "protection": "編輯",
        }
    }

@app.route("/api/get/laserProcessData")
def getlaserProcessData():
    x_list = []
    y_list = []
    for i in range(100):
        x_list.append(i)
        y_list.append(round(rd.uniform(5,10),1))
    return {
        "x":x_list,
        "y":y_list
        }
if __name__ == "__main__":
    app.run()