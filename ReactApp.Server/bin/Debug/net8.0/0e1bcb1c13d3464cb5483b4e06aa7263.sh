function list_child_processes () {
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 13888;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 13888 > /dev/null;
done;

for child in $(list_child_processes 13889);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/faisal/ReactApp/ReactApp.Server/bin/Debug/net8.0/0e1bcb1c13d3464cb5483b4e06aa7263.sh;
