<?php

echo `git fetch --all`;
echo `git reset --hard origin/master`;
chdir('..');
echo `./bootstrap.sh`;