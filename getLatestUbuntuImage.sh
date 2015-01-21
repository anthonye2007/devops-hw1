#!/bin/bash

azure vm image list | grep Ubuntu-14_04_1-LTS-amd64-server- | tail -n1 | awk '{print $2}'
