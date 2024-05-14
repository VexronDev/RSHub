import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Platform Overview',
    pic : require('@site/static/img/platform.jpg').default,
    icons : 
      [require('@site/static/img/Feature1.png').default, 
      require('@site/static/img/Feature2.png').default],
    
    features_ : 
      ["Agility", 
      "Multi-Purpose"],
    
    features_desc : 
      ["It is an integrated system that gives users easy access to simulate scattering variables under different scenarios using a unified interface. It alleviates the burdens of setting up environments and installing dependencies.",
      "It supports multiple scenarios in remote sensing and supports the simulation of diverse scattering observation variables and the corresponding byproducts/ internal variables to facilitate the interpretation of the model outputs."],
    
    sscenario_ : 
      ["Bare Soil", 
      "Vegetation-covered Soil", 
      "Snow-covered soil"],
    
    sscenario_desc: 
      ["Bare Soil Description here", 
      "Vegetation-covered Soil Description here",
      "Snow-covered Soil description here"],

    soil_img:
      [require('@site/static/img/Scenario1.jpg').default,
      require('@site/static/img/Scenario2.jpg').default,
      require('@site/static/img/Scenario3.png').default],
    
    end_credit_img:
      require('@site/static/img/Credit1.jpg').default,
    
    ZJUI_UIUC:
      require('@site/static/img/Logo.png').default,

     description: (
      <>
        Remote Sensing Hub (RSHub) is a shared cloud computing platform for the remote sensing community to compute microwave scattering properties based on microwave electromagnetic scattering mechanisms.  
      </>
    ),

  }
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function handleRedirect1() {
  window.location.href = "../../../docs/category/bare-soil";
}

function handleRedirect2() {
  window.location.href = "../../../docs/category/vegetation-covered-soil";
}

function handleRedirect3() {
  window.location.href = "../../../docs/category/snow-covered-soil";
}

function handletoDocumentation() {
  window.location.href = "../Documentation";
}

function handletoContact() {
  window.location.href = "../Contact-Information";
}

function handletoAcknowledgments() {
  window.location.href = "../Acknowledgements";
}

function handletoGetStarted() {
  window.location.href = "../Getting-Started";
}
function Feature({title, pic,description, icons, features_, features_desc, sscenario_, sscenario_desc, soil_img, end_credit_img, ZJUI_UIUC}) {
  return (
    <div className={clsx('col col-4')}>
       <div
        style={{
          height: '30h',
          fontSize: '20px',
        }}>
      {/*
      <div><h3>News</h3>
            <ul>
            <li><a href="#">important notes......</a><span>03-14-2024</span></li>
            <li><a href="#">important notes......</a><span>03-14-2024</span></li>
            </ul>
      </div>
      */}
      </div>
      <div className="text--center">

      </div>
      <div className="text--left">
        
        {/* The Platform Overview Part */}
        <div className= {styles.center_container}>
          <Heading as="h3" style={{ fontSize: '2.5vw' }}>{title}</Heading>
          <p style={{fontSize: "17px", textAlign: 'center', width: "90%" }}>{description}</p>
          <img style={{fontSize: "1.1vw", textAlign: 'center', width: "90%" }} src={pic} />
        </div>

        {/* The Feature Part */}
        
        <div className= {styles.center_container} style={{marginBottom:"20px"}}>
          <div className= {styles.divider}>
          </div>
          <div style={{marginTop: "45px"}}>
          </div>
          <Heading as="h3" style={{fontSize: "41px"}}>
            Why RSHub?
          </Heading>
        </div>

        <div className={styles.center_container} style={{display: "flex", flexDirection: "row", marginBottom: "70px"}}>

          <div className={styles.center_container} style={{width: "50vw"}}>
            <img style={{ height:"8vw" }} src={icons[0]}/>
            <div className={styles.subhead}>
              {features_[0]}
            </div>
            <div className={styles.text_center}>
              {features_desc[0]}
            </div>
          </div>

          <div style={{width: "5vw"}}>
          </div>

          <div className={styles.center_container} style={{width: "50vw"}}>
            <img style={{ height:"8vw" }} src={icons[1]}/>
            <div className={styles.subhead}>
              {features_[1]}
            </div>
            <div className={styles.text_center}>
              {features_desc[1]}
            </div>
          </div>

        </div>

        {/* Supported Scenario */}

        <div className={styles.sscenario_bg}>
        </div>
        <div className={styles.center_container}>
            <div className={styles.subhead} style={{marginTop: "20px", marginBottom: "30px", display: 'flex', flexDirection: "row"}}>
              Supported&nbsp;
              <div style={{color: "lightgreen", marginRight: "6px" }}> Multiple </div> 
              Scenarios
            </div>
            <div className={styles.center_container_sscenario}>

              {/* First Scenario */}
              <div className={styles.scenario_cont} onClick={handleRedirect1} style={{ cursor: 'pointer' }}>
                <div className={styles.sscenario_subbg}>
                  <div class={styles.sscenario_submarg}>
                    <img style={{ height:"12vw", width:"25vw", borderRadius:"2%"}} src={soil_img[0]}/>
                    <div className={styles.sscenario_subhead}>
                      {sscenario_[0]}
                    </div>
                    {sscenario_desc[0]}
                  </div>
                </div>
              </div>

              <div style={{width: "3vw"}}>
              </div>

              {/* Second Scenario */}
              <div className={styles.scenario_cont} onClick={handleRedirect2} style={{ cursor: 'pointer' }}>
                <div className={styles.sscenario_subbg}>
                  <div class={styles.sscenario_submarg}>
                    <img style={{ height:"12vw", width:"25vw", borderRadius:"2%" }} src={soil_img[1]}/>
                    <div className={styles.sscenario_subhead}>
                      {sscenario_[1]}
                    </div>
                    {sscenario_desc[1]}
                  </div>
                </div>
              </div>

              <div style={{width: "3vw"}}>
              </div>

              {/* Third Scenario */}
              <div className={styles.scenario_cont} onClick={handleRedirect3} style={{ cursor: 'pointer' }}>
                <div className={styles.sscenario_subbg}>
                  <div class={styles.sscenario_submarg}>
                    <img style={{ height:"12vw", width:"25vw", borderRadius:"2%" }} src={soil_img[2]}/>
                    <div className={styles.sscenario_subhead}>
                      {sscenario_[2]}
                    </div>
                    {sscenario_desc[2]}
                  </div>
                </div>
              </div>

            </div>

        </div>

        {/* Three-step Part */}
        <Heading as="h3" style={{fontSize: "38px", display: "flex", flexDirection: "row"}}>
          <div style={{color: "green", marginRight: "12px"}}>Easier</div> 
          to 
          <div style={{color: "rgb(14, 6, 156)", marginRight: "12px", marginLeft: "12px"}}>Run</div> 
          and 
          <div style={{color: "rgb(255, 95, 5)", marginRight: "12px", marginLeft: "12px"}}>Analyze</div>
        </Heading>
        <p>RSHub makes it easy to run and analyze scenarios of your interests</p>

        <div className={styles.left_cont} style={{marginBottom: "1.2rem"}}>
          <div className={styles.center_container} style={{backgroundColor:"green", width: "40vw", height: "17vw"}}>
          Video or Image to be inserted here
          </div>
          <div style={{width: "50vw", marginLeft: "1.5vw"}}>
            <div>Describe: describe scenario, observation information, and algorithms to model the scenario.</div>
            <ol>
              <li>Scenario description: Define your own research problem by specifying types of scenarios, and corresponding properties of scatters. </li>
              <li>Observation description: Configure the microwave payload information include observation types (i.e., active or passive), observation angle, and microwave frequencies.</li>
              <li>Advanced algorithms-specific parameters: Specify approach to model microwave scattering characteristics including the radiative transfer theory-based and full wave analysis-based options.</li>
            </ol>
          </div>
        </div>

        <div className={styles.right_cont} style={{marginBottom: "1.2rem"}}>
          <div className={styles.right_cont} style={{width: "50vw", marginRight: "1.5vw"}}>Deploy: Submit job online for your scenario.</div>
          <div className={styles.center_container} style={{backgroundColor:"green", width: "40vw", height: "17vw"}}>
          Video or Image to be inserted here
          </div>
        </div>

        <div className={styles.left_cont}>
          <div className={styles.center_container} style={{backgroundColor:"green", width: "40vw", height: "17vw"}}>
          Video or Image to be inserted here
          </div>
          <div style={{marginLeft: "1.5vw", width:"50vw"}}>Analyze: Analyze your results with analysis tools.</div>
        </div>

      </div>

      {/* Download Part */}

      <div className={styles.center_container} style={{marginTop: "3rem", marginBottom: "3rem"}}>
        <div className={styles.left_cont} style={{backgroundColor: "rgba(134, 217, 255, 0.567)", width: "80vw", height: "25vw", borderRadius:"1rem"}}>
          <div className={styles.center_container} style={{ height: "100%", width:"31vw", backgroundColor:"blue", borderTopLeftRadius:"1rem", borderBottomLeftRadius:"1rem"}}>
            Image of part of the code to be inserted here
          </div>
          
          <div style={{margin: "2rem"}}>
            <div style={{fontSize: "3rem", fontWeight: "bold"}}>
              Getting Started
            </div>

            <div style={{fontSize: "1.25rem"}}>
              We provide an easy guide with step by step operation 
            </div>

            <div style={{display: "flex", flexDirection: "row"}}>
            <div className={styles.get_started_button1} onClick={handletoGetStarted}>
              Get started
            </div>

            <div className={styles.get_started_button2} onClick={handletoGetStarted}>
              Web Usage
            </div>
            </div>
            
          </div>
        </div>
      </div>

      
      {/* End Credit Part */}
      <div className={styles.end_credit}>
        <div className={styles.overlay}>
          <img src={end_credit_img}/>
        </div>
      </div>

      <div className={styles.end_credit_content}>
        <div className={styles.subhead_end} style={{marginTop: "20px", marginLeft: "50px", display: "flex", flexDirection: "column"}}>
          In Collaboration of
          <img src={ZJUI_UIUC}></img>
        </div>

        <div style={{width: "17vw"}}>

        </div>

        <div style={{display: "flex", flexDirection: "column", marginRight: "3vw"}}>
          <div className={styles.subheadani_end} 
          style={{marginTop: "20px", marginLeft: "50px", display: "flex", flexDirection: "column", cursor: 'pointer'}}
          onClick={handletoDocumentation}>
          
            Documentation
          
          </div>
          <div style={{marginLeft: "70px", display: "flex", flexDirection: "column"}}>
            <li>Publications</li>
            <li>References</li>
            <li>Presentations</li>
            <li>Code Examples</li>
            <li>Q&A</li>
          </div>
        </div>

        <div style={{display: "flex", flexDirection: "column", marginRight: "3vw"}}>
          <div className={styles.subheadani_end} 
          style={{marginTop: "20px", marginLeft: "50px", display: "flex", flexDirection: "column", cursor: 'pointer'}}
          onClick={handletoContact}>
            Contact Us
          </div>
          <div style={{marginLeft: "50px", display: "flex", flexDirection: "column"}}>
            <div>E-mail: xxxxxxxx@intl.zju.edu.cn</div>
            <div>Phone: 19283xxxx923</div>
          </div>
        </div>

        <div style={{display: "flex", flexDirection: "column"}}>
          <div className={styles.subheadani_end} 
          style={{marginTop: "20px", marginLeft: "50px", display: "flex", flexDirection: "column", cursor: 'pointer'}}
          onClick={handletoAcknowledgments}>
            Acknowledgements
          </div>
          <div style={{marginLeft: "70px", display: "flex", flexDirection: "column"}}>
            <li>Cooperation</li>
            <li>Funding Support</li>
            <li>Computing Resources Support</li>
            <li>Project Support</li>
          </div>
        </div>

        
      </div>
    </div>
          
  );

}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

