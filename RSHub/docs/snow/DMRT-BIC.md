---
sidebar_position: 1

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DMRT-BIC 
<Tabs>
  <TabItem value="description" label="Model Description">
    A recent advancement in analyzing snow's microwave remote sensing properties is the DMRT-bicontinuous model. This model leverages the power of numerical solutions to Maxwell's equations (NMM3D) alongside computer-generated, realistic snow microstructures. 

    Bicontinuous Representation: The key aspect of this model is its continuous representation of the snowpack's internal structure. This structure depicts the interfaces between different phases (like air and ice) as irregular and clustered, mimicking the observations from Micro-CT scans of real snow. 

    Extracting Scattering Properties: To capture the overall scattering behavior of the snowpack, the model employs the Discrete Dipole Approximation (DDA) to solve the Volume Integral Equation (VIE) on the generated microstructure. This step yields crucial parameters like the phase matrix, extinction coefficient, scattering coefficient, and permittivity. These parameters effectively represent the statistical scattering properties of the entire snow layer. 

    DMRT for Backscatter and Brightness Temperature: Finally, the calculated scattering properties are fed into the DMRT framework. Solving the DMRT equation with these inputs allows the model to predict the backscatter coefficient and brightness temperature of the snowpack, providing valuable insights for remote sensing applications. 

    ![vege model 1](/img/Image4.png)

    **Figure.** Active remote sensing mode of DMRT-BIC model

  </TabItem>
  <TabItem value="parameter" label="Parameters">

  Here is the valid syntax parameter for usage:

  ```{"output_var":2,"fGHz": [9.6,13.4,17.2], "angle": [30,40,50], "depth": [20,20,20],"rho": [0.3,0.3,0.3],"zp": [1.2,1.2,1.2],"kc":[10000,10000,10000],"Tsnow": [260,260,260],"Tg": 270,"epsr_ground_r":[],"epsr_ground_i":[],"mv": 0.15,"clayfrac": 0.3, "surf_model_setting":[1,0,0]} ```

  Below are the table of each parameter, meaning, their default value, and units:
| Parameter          | Meaning                                     | Default value      | Unit         |
|--------------------|---------------------------------------------|--------------------|--------------|
| output_var         | Mode: active or passive                     | 2                  |              |
| fGHz               | Simulation frequency                        | 17.2               | GHz          |
| angle              | Incidence angle / observation angle         | 40                 | degree       |
| depth              | Layer thickness                             | 20                 | cm           |
| rho                | Layer density                               | 0.3                | gm/cc        |
| kc                 | Layer kc: inversely proportional to grain size | 0.1              | m^-1         |
| zp                 | Layer zp: control size distribution         | 0.1                |              |
| Tsnow              | Layer snow temperature                      | 260                | K            |
| Tg                 | Ground temperature                          | 270                | K            |
| epsr_ground_r      | Real part of the soil permittivity          | Null               |              |
| epsr_ground_i      | Imagery part of the soil permittivity       | Null               |              |
| mv                 | Soil moisture                               | 0.15               |              |
| clayfrac           | Clay content weight fraction                | 0.3                |              |
| surf_model_setting | 1. Physical models to calculate surface backscattering |  3,1,0     |              |  
|                    | 2. rough ground rms height                     |                 |              |
|                    | 3. correlation length                          |                 |              |
  </TabItem>
  
  <TabItem value="Demonstration" label="Demonstration">
    Model results are compared with SnowScat scatterometer data, collected by FMI over Finland area, from January to March 2011. The data includes three channels in X-band and Ku-band: 10.2, 13.3, and 16.7 GHz. Ground data at a specific snowpit (IOA snowpit) include grain size, layer structure, snow depth, snow density, and SSA, etc. 
  </TabItem>

  <TabItem value="Reference" label="References">
    W. Chang, S. Tan, J. Lemmetyinen, L. Tsang, X. Xu and S. H. Yueh, "Dense Media Radiative Transfer Applied to SnowScat and SnowSAR," in IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, vol. 7, no. 9, pp. 3811-3825, Sept. 2014, doi: 10.1109/JSTARS.2014.2343519. 
  </TabItem>
  

</Tabs>