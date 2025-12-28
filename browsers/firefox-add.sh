certutil -d sql:/home/lgarciag/.mozilla/firefox/ef7fbv47.default-release -A -t "C,," -n "riscRootCA" -i  /etc/ssl/risc-CA/cacert.pem 
# eliminar 
# certutil -D -d sql:/home/lgarciag/.mozilla/firefox/ef7fbv47.default-release  -n "riscRootCA"
