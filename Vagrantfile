# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/zesty64"

  config.vm.network "private_network", ip: "192.168.220.1"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  config.vm.provision "shell", inline: <<-SHELL

    echo "=== INSTALLING NODE/NPM ==="
    wget https://nodejs.org/dist/v7.10.0/node-v7.10.0-linux-x64.tar.xz -o wget.txt
    tar -xf node-v7.10.0-linux-x64.tar.xz
    mv node-v7.10.0-linux-x64 /usr/local/lib/node && cd $_
    chmod 777 bin/*
    ln -s /usr/local/lib/node/bin/* /usr/local/bin/

    echo "=== INSTALLING UPDATES ==="
    apt-get update
    apt-get install --assume-yes nginx curl

    echo "====== NGINX SET-UP ======"
    cp /vagrant/etc/nginx/* /etc/nginx/sites-available/
    ln -s /etc/nginx/sites-available/service-api /etc/nginx/sites-enabled/service-api
    ln -s /etc/nginx/sites-available/app-api /etc/nginx/sites-enabled/app-api
    rm /etc/nginx/sites-enabled/default
    service nginx restart

    echo "=== RESOLVING NPM DEPS ==="
    cd /vagrant
    npm install
    npm ln -s

  SHELL
end
