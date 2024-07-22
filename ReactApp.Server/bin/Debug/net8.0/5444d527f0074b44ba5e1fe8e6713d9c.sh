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

ps 4156;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 4156 > /dev/null;
done;

for child in $(list_child_processes 4159);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/faisal/ReactApp/ReactApp.Server/bin/Debug/net8.0/5444d527f0074b44ba5e1fe8e6713d9c.sh;
