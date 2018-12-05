#!/bin/bash

curl -XPUT "https://api.sugarwod.com/v2" \
  --include \
  --request GET \
  --header "Authorization: 38bb6359-42e5-41f8-9d15-8f30206f91d2" \
  --header "Content-Type": "application/json"

echo
