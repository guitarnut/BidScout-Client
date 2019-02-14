#!/bin/bash

BRANCH=${1:-master}

GREEN=`tput -Txterm-256color setaf 2`

# Checkout Branch
echo "${GREEN}Checking out ${BRANCH} Branch${RESET}"
git checkout ${BRANCH} 2> /dev/null

#run npm install for final script

pidserver=$(pgrep -f 'bidscout-0.0.1-SNAPSHOT')

if [ -n "$pidserver" ]; then
    kill $pidserver
    echo "Terminated java process"
else
    echo "Java process does not exist"
fi

git pull 2> /dev/null

yarn run build 2> /dev/null

# Stop the Service (might not be running)
echo "${GREEN}Stopping Service{RESET}"

pid=$(pgrep -f 'node /usr/local/bin/serve -s build -p 80')

if [ -n "$pid" ]; then
    kill $pid
    echo "Terminated process"
else
    echo "Does not exist"
fi

# Pause
sleep 5

nohup serve -s build -p 80&
