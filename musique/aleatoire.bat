@echo off
 
set /a max=0
 
set /a nbr=0
 
rem Compte le nombre de fichier dans le répertoire
 
For %%a In ("*.*") Do set /a max+=1
 
rem Choisit un nombre aléatoire entre 1 et le nombre de fichier
 
set /a nbr=%random%%%%max%
 
rem Met en variable le nom du fichier qui correspond au nombre aléatoire
for /F "tokens=2 delims=]" %%i in ('dir /A:-D /B ^| find /N "." ^| find "%nbr%"') do set fichier=%%i
 
"%fichier%"
exit