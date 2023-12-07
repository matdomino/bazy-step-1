'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const port = 3000;
app.use(bodyParser.json());

const dbUrl = ''