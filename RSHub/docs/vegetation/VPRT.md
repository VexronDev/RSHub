---
sidebar_position: 1

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vegetation Passive Radiative Transfer Model (VPRT)  
<Tabs>
  <TabItem value="description" label="Model Description">
    This model estimates the brightness temperature of vegetation covered land surfaces based on the radiative transfer theory. It incorporates the multiple scattering effects both within the vegetation layer and in the vegetation-soil scattering interactions. The model enables heterogeneous vertical distribution of vegetation components for better characterization of complex vegetation scenarios including mixed tree species in various growth stages. This platform allows users to define the vertical structure of vegetation to fit their own research objectives, while providing a reliable tool for exploring its impact on the associated microwave emission. 

    ![vege model 1](/img/Image2.png)

    **Figure.** A four-layer vegetation scenario. d is the total height(z) of the vegetation. Radiometer is receiving signals with incident angle of θ.

  </TabItem>
  <TabItem value="parameter" label="Parameters">

  Here is the valid default parameters:

  ```{"fGHz": 1.41, "core_num": 10, "scatters": [[1, 0.37, 7.85, 0.15, 0, 0, 0, 8, 0.24], [1, 0.444, 0.555, 0.0112, 35, 90, 0, 8, 0.24]], "sm": 0.1, "rmsh": 0.01, "clay": 0.19, "perm_soil_r": 0, "perm_soil_i": 0, "veg_height": 8, "err": 0.1, "Tgnd": 300, "Tveg": 300, "Flag_forced_cal": 0}```

  Below are the table of each parameter, meaning, their default value, and units:
    | Parameter             | Meaning                                    | Default value | Unit |
|---------------------------|--------------------------------------------|---------------|------|
| **bservation settings**   |                                            |               |      |
| fGHz                      | Simulation frequency                       | 1.41          | GHz  |
|                           |                                            |               |      |
| **Model settings**        |                                            |               |      |
| err                       | Convergence error                          | 0.1           | K    |
|                           |                                            |               |      |
| **Vegetation settings**   |                                            |               |      |
| T                         | Vegetation temperature                     | 300           | K    |
| Height_total              | Height of the vegetation layer             | 8             | m    |
| num_scat                  | Number of types of scatterers              | 4             |      | 
| **-> Eight attribute values for each type of scatterer** |             |               |      |
| type                      | Type of the scatterer; 1 for cylinder, 0 for disc | 1, 1, 1, 0  |      |
| VM                        | Volumetric moisture of scatterer           | 0.37, 0.501, 0.444, 0.58          |      |
| L                         | Length of the scatterer                    | 7.85, 1.41, 0.555, 1e-4          | m    |
| D                         | Diameter of the scatterer                  | 15e-2, 2.88e-2, 1.12e-2, 2e-2         | m    |
| betar                     | Orientation range of the scatterer         | [0,10], [30,90], [35,90], [0,90]   | degree |
| density                   | Density of the scatterer                   | 0.24, 3.12, 34.32, 7712          | m^-2 |
| distribution              | Vertical distribution range of the scatterer | [0,8], [2.3,5], [2,5], [2,8]      | m    |
|                           |                                            |               |      |
| **Soil settings**         |                                            |               |      |
| soil_mv                   | Soil moisture                              | 0.2           |      |
| perm_soil; ```{real,image}```   | Real part and image part of the permitivity constant of the soil | 0 + i0 | This parameter is not mandatory. The default value is 0 + i0  |
| clay                      | Clay ratio                                 | 0.19          |      |
| rms                       | Rms height                                 | 1e-2          | m    |
| T2                        | Soil temperature                           | 300           | K    |
  </TabItem>

  <TabItem value="Demonstration" label="Demonstration">
    The data collected from the SMAPVEX12 campaign was used for the demonstration.  The SMAPVEX12 field survey was conducted from June 6 to July 17, 2012 to understand the relationship between SMAP products and changes in soil and vegetation moisture content, and to develop soil moisture inversion algorithms.  

    Please check out the [demo](https://github.com/zjuiEMLab/RShub_demo/blob/main/Vegetation-demo-1.ipynb)
  </TabItem>

  <TabItem value="Reference" label="References">
    K. Chen and S. Tan, “A Multiple-Scattering Microwave Radiative Transfer Model for Land Emission With Vertically Heterogeneous Vegetation Coverage,” IEEE Transactions on Geoscience and Remote Sensing, 2024. 
  </TabItem>

</Tabs>