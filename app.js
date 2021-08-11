const express = require('express');

require('dotenv').config();
require('./src/Database/startup')(express);