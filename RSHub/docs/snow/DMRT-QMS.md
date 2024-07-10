---
sidebar_position: 1

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DMRT-QMS 
<Tabs>
  <TabItem value="description" label="Model Description">
    DMRT-QMS is a physical scattering model that is widely adopted for active and passive microwave modeling of snowpacks based on the dense media radiative transfer theory (DMRT). The DMRT theory predicts the microwave intensity scattering, absorption, and propagation in a dense random media. In DMRT-QCA, the approach of quasi-crystal approximation (QCA) is applied to characterize snow scattering characteristics by solving the multiple scattering of densely packed sticky spheres with moderate grain sizes. The QCA approach provides a broad range of frequency-, size-, and density- dependent scattering characteristics with moderate forward scattering patterns. The size of the snow grains, the stickiness of the snow, the snow density or equivalently the ice volume fraction, and the temperature of the snow all affect these characteristics. In DMRT-QMS, the discrete ordinate method with eigenvalue analysis is used to solve the radiative transfer equation with multiple scattering effects among ice particles. DMRT-QMS computes both the Tbs and the backscattering coefficients of a snowpack. 

    ![vege model 1](/img/Image3.png)

    **Figure.** Active remote sensing mode of DMRT-QMS model 

  </TabItem>
  <TabItem value="parameter" label="Parameters">

  Here is the Default Parameters:

  ```{"output_var":2,"fGHz": [9.6,17.2], "angle": [40,], "depth": [30,20,7,18],"rho": [0.111,0.224,0.189,0.216],"dia": [0.05,0.1,0.2,0.3],"tau":[0.12,0.15,0.25,0.35],"Tsnow": [260,260,260,260],"Tg": 270,"epsr_ground_r":[3],"epsr_ground_i":[1],"mv": 0.15,"clayfrac": 0.3, "surf_model_setting":[2,0.305,4]} ```

  Below are the table of each parameter, meaning, their default value, and units:
    | Parameter          | Meaning                                     | Default value      | Unit         |
|--------------------|---------------------------------------------|--------------------|--------------|
| output_var         | Mode: active or passive                     | 2                  |              |
| fGHz               | Simulation frequency                        | 9.6, 17.2          | GHz          |
| angle              | Incidence angle / observation angle         | 40                 | degree       |
| depth              | Layer thickness                             | 20                 | cm           |
| rho                | Layer density                               | 0.3                | gm/cc        |
| dia                | Layer grain size                            | 0.1                | cm           |
| tau                | Layer stickiness                            | 0.1                |              |
| Tsnow              | Layer snow temperature                      | 260                | K            |
| Tg                 | Ground temperature                          | 270                | K            |
| epsr_ground_r      | Real part of the soil permittivity          | Null               |              |
| epsr_ground_i      | Imagery part of the soil permittivity       | Null               |              |
| mv                 | Soil moisture                               | 0.15               |              |
| clayfrac           | Clay content weight fraction                | 0.3                |              |
| surf_model_setting | 1. Physical models to calculate surface backscattering | 3,1,0   |              |
|                    | 2. Rough ground rms height (cm) for active; polarization mixing factor, unitless for passive |       |       |
|                    | 3. Correlation length for active; roughness height factor, unitless for passive |              |              |
  </TabItem>

  <TabItem value="Demonstration" label="Demonstration">
    The measured snow parameters of snow layer structure at the IOA snow pit on March 15, 2011, are listed, including the snow depth, visual grain size, and mean density of each layer. In this table, the stickiness parameters τ of the QCA scattering model used for each layer are also listed. The airborne SnowSAR backscattering measurements were conducted on the same day. The flight track covered the IOA snow pit.  
  </TabItem>

  <TabItem value="Reference" label="References">
    W. Chang, S. Tan, J. Lemmetyinen, L. Tsang, X. Xu and S. H. Yueh, "Dense Media Radiative Transfer Applied to SnowScat and SnowSAR," in IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, vol. 7, no. 9, pp. 3811-3825, Sept. 2014, doi: 10.1109/JSTARS.2014.2343519. 
  </TabItem>

</Tabs>