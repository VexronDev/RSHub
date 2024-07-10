---
sidebar_position: 1

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Layered Soil Full Wave Model - Volume Integral Equation based Numerical Maxwell Model in 3D with Discrete Dipole Approximation（Layed Soil-NMM3D-VIE-DDA)
<Tabs>
  <TabItem value="description" label="Model Description">
    The Layered Soil Half-Space Equivalent Microwave model is a simplified approach for modeling the active/passive microwave observations of layered soil. It models the microwave parameters of soil, such as backscattering coefficients, bistatic scattering coefficients, coherent reflection coefficients, and microwave brightness temperatures, by defining the half space equivalent representation form of layered soil and relying on the AIEM model for processing the rough surface of soil in a uniform medium in half space. The model describes layered soil by its interface roughness, thickness of each layer, and dielectric constant. 

    ![vege model 1](/img/image1.png)

    **Figure.** An illustration of the layered soil with a plane wave incidence.

  </TabItem>
  <TabItem value="parameter" label="Parameters">

  Here is the valid syntax parameter for usage:

  ```{"h": 0.01, "cLx": 0.1, "cLy": 0.1, "Lx": 1.6, "Ly": 1.6, "Lz": 0.08, "xr": -0.8, "yr": -0.8, "zr": 0, "d": 0.01, "freq": 1.26e9, "deg0": 40, "epsr_ice_re": 4.024, "epsr_ice_im": 0.3, "epsr_g_re": 5.198, "epsr_g_im": 0.445, "Ts": 300.75, "Tg": 295.15, "nr": 15, "ir_beg": 1, "ir_end": 15, "tol": 0.001, "rest": 10, "maxiter": 30000, "N": 10000, "seed": 100}```

  Below are the table of each parameter, meaning, their default value, and units:
    | Parameter       | Meaning                                          | Default value   |  Unit       |
    |-----------------|--------------------------------------------------|-----------------|-------------|
    | h               | RMS height of the soil roughness                 | 0.013           | m           |
    | cLx             | Correlation length of the roughness in x-axis    | 0.15            | m           |
    | cLy             | Correlation length of the roughness in y-axis    | 0.15            | m           |
    | Lx              | Cut cub length in x-axis                         | 1.8             | m           |
    | Ly              | Cut cub length in y-axis                         | 1.8             | m           |
    | Lz              | Cut cub length in z-axis                         | 0.05            | m           |
    | xr              | start edge in x-axis                             | -0.9            | m           |
    | yr              | start edge in y-axis                             | -0.9            | m           |
    | zr              | start edge in z-axis                             | 0               |             |
    | d               | Depth of top layer soil                          | 0.005           | m           |
    | freq            | Wave frequency                                   | 1.26e9          | Hz          |
    | deg0            | Incident angle in degree                         | 40              | degree      |
    | epsr_ice_re     | Real part of top layer medium permittivity       | 5.2             | 1           |
    | epsr_ice_im     | Imag part of top layer medium permittivity       | 0.46            | 1           |
    | epsr_g_re       | Real part of Substrate layer medium permittivity | 5.2             | 1           |
    | epsr_g_im       | Imag part of Substrate layer medium permittivity | 0.46            | 1           |
    | Ts              | Top layer medium temperature                     | 300.75          | K           |
    | Tg              | Substrate layer temperature                      | 295.15          | K           |
    | nr              | Mento Carlo realization times                    | 15              | 1           |
    | ir_beg          | Realization start number                         | 1               | 1           |
    | ir_end          | Realization end number                           | 15              | 1           | 
    | tol             | GMRES tolerance                                  | 0.001           | 1           |
    | rest            | GMRES restart number                             | 10              | 1           |
    | maxiter         | GMRES maximum iteration in inner loop            | 30000           | 1           |
    | N               | NO NEED                                          | 10000           | 1           |
    | seed            | NO NEED                                          | 100             | 1           | 
  </TabItem>

  <TabItem value="Reference" label="References">
    [5] Tsang, L., Liao, T. H., Tan, S., Huang, H., Qiao, T., & Ding, K. H. (2017). Rough Surface and Volume Scattering of Soil Surfaces, Ocean Surfaces, Snow, and Vegetation Based on Numerical Maxwell Model of 3-D Simulations. IEEE J. Sel. Topics Appl. Earth Observ. Remote Sens., 10(11), 4703-4720. 
  </TabItem>

</Tabs>