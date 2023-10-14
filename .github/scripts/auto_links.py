#!/bin/bash
# encoding: UTF-8
import pymongo
import os
import httpx
import json

GITHUB_URI = "https://raw.githubusercontent.com/Big-Cake-jpg/big-cake-jpg.github.io/source/public/links.json"
MONGODB_URI = os.environ.get("MONGODB_URI")
MONGODB_DB = os.environ.get("MONGODB_DB")
MONGODB_COL = os.environ.get("MONGODB_COL")

client = pymongo.MongoClient(MONGODB_URI)
db = client[MONGODB_DB]
col = db[MONGODB_COL]


def get_links() -> list:
    """Get all link data from Github,

    Returns:
        list: Data
    """
    return json.loads(httpx.get(GITHUB_URI).content.decode("UTF-8"))


def get_all_find() -> list:
    """Get all data in col.

    Returns:
        list: Data
    """
    return col.find({}, {"_id": 0})

def compare(origin: list, target: list) -> list:
    """Compare two lists and return the missing dicts.

    Args:
        origin (list): Origin List
        target (list): Target List

    Returns:
        list: Missing Dict
    """
    missing_dicts = []
    for dict1 in origin:
        if dict1 not in target:
            missing_dicts.append(dict1)
    return missing_dicts

origin = get_all_find()
target = get_links()
col.insert_many(compare(origin, target))