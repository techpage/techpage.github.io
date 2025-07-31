# Data Platfrom VM usage  


- [1. Installing VirtualBox](#1-installing-virtualbox)
- [2. Importing the Virtual Machine](#2-importing-the-virtual-machine)
- [3. Configuring Hardware Virtualization](#3-configuring-hardware-virtualization)
- [4. Accessing the Virtual Machine and Using the Data Platform](#4-accessing-the-virtual-machine-and-using-the-data-platform)


# 1. Installing VirtualBox  

To get started, download and install VirtualBox by following the official documentation: https://www.virtualbox.org/manual/topics/Introduction.html#intro-installing. Make sure to choose the correct version for your operating system.  

# 2. Importing the Virtual Machine  

a. **Save the Virtual Machine File Locally**  

Download and store the virtual machine file on your local computer.  

![](images/f88e99a649edc1acbdbf453dec85fd6d2ef610e1cac02eaf626310681655a3ea.jpg)  

b. **Load the Virtual Machine**

Open VirtualBox and click on **Register** to access the virtual machine import interface.  

![](images/8cba7bfff86aaa13a68dd2049979072e25e6031ced331cbf6df92586ee2e5fff.jpg)  

Navigate to the directory where the virtual machine file is stored, select and open the `ubuntu_24.04.vbox` file to load the virtual machine.  

![](images/61b9b63899589f7498d0150d609e8a4e08dd8f234518b225b36eda06715fa6f4.jpg)  

# 3. Configuring Hardware Virtualization  

a. **Enable CPU Virtualization in BIOS**  

Restart your computer and enter the BIOS/UEFI settings. Look for an option related to **CPU Virtualization** (such as Intel VT- $\boldsymbol{\cdot}\boldsymbol{\times}$ or AMD-V) and enable it.  

b. **Disable Conflicting System Features in Windows** 

> i. Open the **Turn Windows features on or off** settings.  


> ii. Disable **Hyper-V, Windows Sandbox, Virtual Machine Platform**, and any other features that may interfere with VirtualBox.  

![](images/0d73015fafe38456e4df0c52b8ba70f7c427a5fd0c3dbe707cfa5acc4ab8e9f5.jpg)  

c. **Turn Off Memory Integrity**

> i. Open **Windows Security Center.**


> ii. Go to **Core Isolation** settings and disable the **Memory Integrity** option.  

![](images/48d6afa8e40e7e816dbd267cc4ca8eb3c5b84a75f0d70af1b07a898126a57bf0.jpg)  

d. **Enable Virtualization in VirtualBox**

> i. Open VirtualBox and go to **Settings** for the virtual machine.   

> ii. Navigate to **System $\rightarrow$ Processor**. 

> Enable **PAE/NX** and **VT-x/AMD-V** to ensure proper virtualization support.  

![](images/865bfb094d514ad45dc9811b336717252ee4630abf194065f15cd389e4176dc5.jpg)  

# 4. Accessing the Virtual Machine and Using the Data Platform  

a. **Start and Log into the Virtual Machine**  

Open VirtualBox and click the **Start** button to boot up the virtual machine.  

![](images/8f9f0e9b29942e17a4785485517b7be7a426ae4d0e03cda27911ab08b38b5db9.jpg)  

Log in using the following credentials:  

- **Password**: vboxuser
- Go to: http://localhost:27021/#/login?lang=en-US.
- Enter the following login credentials:   
- **Username**: administrator@example.com
- **Password**: password  

![](images/9f1ed94554cd698063488c02ae373bee8f2ee0f80113b3e4022ae92037bf4b3f.jpg)  

b. **Log into the Data Platform** 

Open a web browser inside the virtual machine.  

![](images/007bbdf87d7ad20f72bf65c3d0385a95d3f60f0ec0fccb641d2049cbca5e706e.jpg)  

c. **Perform Data Operations** 

Once logged in, navigate through the main interface of the data platform to perform data-related tasks as needed.  

![](images/7a35f1e07c81ab6e43a48bb36f84fbb6b4d15b044547404e3a513b3f4c59dd82.jpg)  
