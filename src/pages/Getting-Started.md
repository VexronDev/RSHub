---
title: Getting Started
---

# Getting Started 
**Step 1. Install Python and dependencies** 

RShub is developed with one of the highest stable version of Python (3.9 as of July 2022) but also work with python 3.6 or higher. Anaconda is the recommended distribution to get Python as it contains numerous packages needed for scientific computations and analysis. This is an open source distribution available for Linux, Windows and MacOS. Alternatively, you can install Python with the main package manager of your system (e.g. apt-get on Debian/Ubuntu, rpm on Fedora, homebrew on MacOS, ...) or visit https://wwww.python.org/ for more information. Anaconda provides good performance because it distributes numpy and scipy using the MKL library which provides highly-optimized LAPACK functions.

To keep your system clean we highly recommend to create a virtual environment for the following installation either via conda create or virtualenv.

The main python packages to install are: numpy, scipy, pandas, xarray. With the Anaconda distribution, use the Anaconda navigator or the conda command:

```
conda install numpy scipy xarray pandas
```
Using pip, it is similar:
```
pip install numpy scipy xarray pandas
```

**Step 2. Get code** 

RShub code is hosted on github. To get the code clone the repository with:

```
git clone https://github.com/RShub
```


**Step 3. Run Models in python** 

```
import json 

# Opening JSON file 

f = open('data.json') 

# returns JSON object as a dictionary 

data = json.load(f) 

url = 'http://rshub.zju.edu.cn/models' 

headers = {'Content-Type': 'application/json'} 

# Convert the data to a JSON string 

json_data = json.dumps(data) 

response = requests.post(url, data=json_data, headers=headers) 
```

**Step 4. Retrieve and plot results** 

```
# Read variables into python 

TU_all_multi = mat_data_multi['TU_all'] 

theta_obs_multi = mat_data_multi['theta_obs'] 

TU_all_unif = mat_data_unif['TU_all'] 

theta_obs_unif = mat_data_unif['theta_obs'] 

import matplotlib.pyplot as plt 

# plot the data 

fig = plt.figure() 

ax = fig.add_subplot(1, 1, 1) 

ax.plot(theta_obs_multi[0,:], TU_all_multi[0,:], color='tab:blue') 

ax.plot(theta_obs_multi[0,:], TU_all_multi[1,:], color='tab:blue',linestyle='--') 

ax.plot(theta_obs_unif[0,:], TU_all_unif[0,:], color='tab:orange') 

ax.plot(theta_obs_unif[0,:], TU_all_unif[1,:], color='tab:orange',linestyle='--') 

ax.set(xlabel='Observation Angle $\Theta(^\circ)$', ylabel='Brightness Temperature $T_B(K)$') 

ax.legend(['layered case V', 'layered case H', 'uniform case V', 'uinform case H']) 
```