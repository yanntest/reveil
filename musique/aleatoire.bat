@echo off
set /a max=19
set /a nbr=19
For %%a In ("*.*") Do set /a max+1
set /a nbr=%random%%%%max%
start C:\SARAH\plugins\reveil\musique\%nbr%.mp3
exit