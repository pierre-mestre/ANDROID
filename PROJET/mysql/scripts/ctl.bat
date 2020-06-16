@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop


"D:\Pierre MESTRE\Desktop\ANDROID\PROJET\mysql\bin\mysqld" --defaults-file="D:\Pierre MESTRE\Desktop\ANDROID\PROJET\mysql\bin\my.ini" --standalone
if errorlevel 1 goto error
goto finish

:stop
cmd.exe /C start "" /MIN call "D:\Pierre MESTRE\Desktop\ANDROID\PROJET\killprocess.bat" "mysqld.exe"

if not exist "D:\Pierre MESTRE\Desktop\ANDROID\PROJET\mysql\data\%computername%.pid" goto finish
echo Delete %computername%.pid ...
del "D:\Pierre MESTRE\Desktop\ANDROID\PROJET\mysql\data\%computername%.pid"
goto finish


:error
echo MySQL could not be started

:finish
exit
