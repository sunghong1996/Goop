from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import motor.motor_asyncio

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "module": 3,
            "week": 17,
            "day": 5,
            "hour": 19,
            "min": "00"
        }
    }

MONGODB_URL = "mongodb://murph:password@db:27017"
client = motor.motor_asyncio.AsyncIOMotorClient(MONGODB_URL)
database = client.mydatabase