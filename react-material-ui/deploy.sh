#!/bin/bash

BRANCH=${1:-master}

GREEN=`tput -Txterm-256color setaf 2`

# Checkout Branch
echo "${GREEN}Checking out ${BRANCH} Branch${RESET}"
git checkout ${BRANCH} 2> /dev/null

git pull 2> /dev/null

yarn run build 2> /dev/null

nohup serve -s build -p 80&
