FROM ubuntu:16.04

# Update apt and install required packages.
RUN apt-get update; \
    apt-get -y upgrade; \
    apt-get install -y vnc4server git python vim wmctrl curl apt-transport-https libasound2

# Install VSCode.
RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg; \
    install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/; \
    sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'; \
    apt-get update; \
    apt-get install -y code; \
    sed -i 's/BIG-REQUESTS/_IG-REQUESTS/' /usr/lib/x86_64-linux-gnu/libxcb.so.1

# Set default environments.
ENV PASSWORD=123456 WIDTH=1920 HEIGHT=1080
