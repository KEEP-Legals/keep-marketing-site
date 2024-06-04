#!/bin/bash

ENV=$1
BRANCH=${2:-master}

if [[ "$ENV" == "prod" ]]; then REMOTE_HOST=""
elif [[ "$ENV" == "stage" ]]; then REMOTE_HOST="keep_stage_web@keepweb.deployed.space"
else
  echo "$ENV is not correct environment"
  exit 1
fi

echo "Deploying $BRANCH branch on the $ENV "

ssh -t -A $REMOTE_HOST -p 22 << EOF
  cd keep-marketing-site
  git reset --hard
  git pull
  git checkout $BRANCH
  yarn
EOF
rsync -r -e "ssh -p 22" --exclude="*.js.map" .next $REMOTE_HOST:~/keep-marketing-site/
ssh -t -A $REMOTE_HOST -p 22 "sudo supervisorctl restart keep_${ENV}_web"