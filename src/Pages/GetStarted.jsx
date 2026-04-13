import Marquee from "react-fast-marquee"
import Title from "../Components/Title"
import assets from "../assets/assets"
import { FaLocationPin, FaPhone } from "react-icons/fa6"
import { FaEnvelope } from "react-icons/fa"
import FaultCall from "../Components/FaultCall"
import Gallery from "../Components/Gallery"

function GetStarted() {
  return (
    <div className='pt-20 mb-15'>
      <div className='text-center flex flex-col items-center text-2xl pt-10 border-t'>
        <Title text1={'GET'} text2={'STARTED'} />
        <div className='w-16 sm:w-24 h-[2px] bg-[#BF9A33]'></div>
      </div>

      <div className='w-full mt-10 bg-[#BF9A33] px-5 py-5'>
        <Marquee speed={60} gradient={false} pauseOnHover={true}>
          <div className='flex items-center justify-center text-white gap-15'>
            <p className='flex items-center gap-2'> <FaLocationPin className='text-lg' />No 9, Oguntona Cresent Gbagada Phase I, Lagos.</p>
            <p className='flex items-center gap-2'><FaPhone className='text-lg' />08101415188</p>
            <p className='flex items-center gap-2'><FaEnvelope className='text-lg' />info@toptechengineeringltd.com
            </p>
          </div>
        </Marquee>
      </div>

      <div className='mt-15 px-4 py-4'>
        <h2 className='text-gray-600 underline flex text-start text-2xl'>
          To <span className='text-[#BF9A33]'> get started </span> we would give
          you a quick summary of what we do and our products.
        </h2>

        <div className='mt-5 text-start'>
          <h3 className='text-gray-800 font-bold text-2xl'>What We Do:</h3>
          <p className='text-gray-600 py-2 '>
            Welcome to the Toptech Website, As an engineering company, our core
            purpose is to transform conceptual ideas into tangible, functional,
            and sustainable realities. We bridge the gap between scientific
            theory and practical application, acting as the architects of
            technical solutions that drive progress across various industries.
            Our team of skilled engineers, technical experts, and project
            managers specialize in taking complex challenges—from industrial
            automation to infrastructure development—and engineering them into
            safe, efficient, and cost-effective solutions. At our core, we do
            not just build; we innovate and execute. Here is a detailed
            breakdown of what we do as an engineering firm:
          </p>

          <h4 className='text-gray-800 font-bold text-2xl mt-5'>
            Our Products:
          </h4>
        </div>

        <div className='mt-5 text-start text-gray-600'>
          <h4 className=' text-2xl'>Elitech Power System & UPS</h4>
          <p className=' leading-relaxed'>
            Elitech series of products are developed through the collaborative
            efforts of experienced Field and R&D Engineers from Nigeria and
            Canada. Our products are designed after proper consideration and
            analysis of the challenges common in Manufacturing Industries,
            Pharmaceuticals, Data Centers, ATM Cash Centers, Server Rooms,
            Homes, etc. Our decades of experience in the power industry has
            given us the edge, skills and competency to develop products that
            can address the diverse needs of our customers. We are committed to
            provide energy-saving, green and continuous power solutions.
            Customer's satisfaction is our major concern, and we are committed
            to developing environmental-friendly power products and of highest
            reliability with affordable cost and premium features.
          </p>
          <ol className='px-2 mt-2'>
            <li>1. Uninterupted Power Supply</li>
            <li>2. Home and Industrial Inverters (Pure Sine Wave).</li>
            <li>3. Solar/Off-Grid Inverters</li>
            <li>4. Automatic Voltage Regulators</li>
            <li>PV Modules/Solar Panels</li>
          </ol>

          <div className='max-w-7xl mx-auto flex flex-col md:flex-row text-start gap-10 mt-7'>
            {/* RIGHT SIDE (IMAGE) */}
            <div className='w-full md:w-1/2'>
              <div className='flex flex-col gap-4'>
                <img
                  src={assets.getstarted_img_1}
                  alt=''
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>

            {/* LEFT SIDE (TEXT) */}
            <div className='w-full md:w-1/2 space-y-10'>
              <div>
                <h2 className='text-2xl font-bold text-gray-800 mb-2 mt-10'>
                  ELT AVR SERIES 3 - 600KVA
                </h2>
                <p className=' text-gray-800 leading-relaxed'>Main Features</p>
                <ul className='px-2 mt-2 gap-5'>
                  <li className='py-3'>1. Wide power and voltage interval</li>
                  <li className='py-3'>2. High Efficiency and Reliability</li>
                  <li className='py-3'>3. Fast Regulation</li>
                  <li className='py-3'>4. Non-Linear Charges Drive</li>
                  <li className='py-3'>
                    5. Load transfer to Bypass via pole charge switch
                  </li>
                  <li className='py-3'>6. Safe and Economic usage</li>
                  <li className='py-3'>
                    7. Overloads and Overcurrent Protection
                  </li>
                  <li className='py-3'>8. 24 months warranty</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row text-start gap-10 mt-7'>
            {/* RIGHT SIDE (IMAGE) */}
            <div className='w-full md:w-1/2'>
              <div className='flex flex-col gap-4'>
                <img
                  src={assets.getstarted_img_2}
                  alt=''
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>

            {/* LEFT SIDE (TEXT) */}
            <div className='w-full md:w-1/2 space-y-10'>
              <div>
                <h2 className='text-2xl font-bold text-gray-800 mb-2 mt-10'>
                  ELT OFF-GRID SOLAR INVERTER 500W - 3000W
                </h2>
                <p className=' text-gray-800 leading-relaxed'>Main Features</p>
                <ul className='px-2 mt-2 gap-5'>
                  <li className='py-3'>
                    1. High reliability: adopt high-speed DSP control system,
                    combine advanced SPWM technology and high-speed power MOS
                  </li>
                  <li className='py-3'>
                    2. Operating mode selectable: energy storage priority or
                    power supply priority
                  </li>
                  <li className='py-3'>
                    3. Flexible battery management system: auto switch
                    three-stage charging mode shortens recharge time; wide
                    charging current is selectable according to configured
                    battery
                  </li>
                  <li className='py-3'>
                    4. DOD (Depth of discharge) is selectable to meet more
                    applications
                  </li>
                  <li className='py-3'>
                    5. AC input with effective online synchronous stabilizing
                    technology
                  </li>
                  <li className='py-3'>6. No-load auto shutdown function</li>
                  <li className='py-3'>7. Automatic frequency selection</li>
                  <li className='py-3'>
                    8. Auto power - on/off function; real-time monitoring
                    testing and intelligent start up/shutdown by RS232 OR USB
                    interface
                  </li>
                  <li className='py-3'>9. 24 months warranty</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row text-start gap-10 mt-7'>
            {/* RIGHT SIDE (IMAGE) */}
            <div className='w-full md:w-1/2'>
              <div className='flex flex-col gap-4'>
                <img
                  src={assets.getstarted_img_3}
                  alt=''
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>

            {/* LEFT SIDE (TEXT) */}
            <div className='w-full md:w-1/2 space-y-10'>
              <div>
                <h2 className='text-2xl font-bold text-gray-800 mb-2 mt-10'>
                  ELT SERIES 6-10KVA
                </h2>
                <p className=' text-gray-800 leading-relaxed'>Main Features</p>
                <ul className='px-2 mt-2 gap-5'>
                  <li className='py-3'>1. Online double conversion</li>
                  <li className='py-3'>2. Wide input power factor</li>
                  <li className='py-3'>3. Automatic Bypass</li>
                  <li className='py-3'>4. Monitoring via SNMP</li>
                  <li className='py-3'>
                    5. Intelligent RS232 + USB + EPO communication port
                  </li>
                  <li className='py-3'>6. Internal Battery bank</li>
                  <li className='py-3'>7. 24 months warranty</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row text-start gap-10 mt-7'>
            {/* RIGHT SIDE (IMAGE) */}
            <div className='w-full md:w-1/2'>
              <div className='flex flex-col gap-4'>
                <img
                  src={assets.getstarted_img_4}
                  alt=''
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>

            {/* LEFT SIDE (TEXT) */}
            <div className='w-full md:w-1/2 space-y-10'>
              <div>
                <h2 className='text-2xl font-bold text-gray-800 mb-2 mt-10'>
                  ELT-3P SERIES 10-120KVA
                </h2>
                <p className=' text-gray-800 leading-relaxed'>Main Features</p>
                <ul className='px-2 mt-2 gap-5'>
                  <li className='py-3'>1. Online double conversion</li>
                  <li className='py-3'>2. Fully DSP control</li>
                  <li className='py-3'>3. IGBT rectifier</li>
                  <li className='py-3'>4. Wide input voltage range</li>
                  <li className='py-3'>
                    5. Advanced battery charging management
                  </li>
                  <li className='py-3'>
                    6. Frequency converter function (40-120kva)
                  </li>
                  <li className='py-3'>7. Small footprint design</li>
                  <li className='py-3'>8. Intelligent fan speed control</li>
                  <li className='py-3'>9. ECO and EPO function</li>
                  <li className='py-3'>
                    10. Intelligent RS323 / RS485 Communication port
                  </li>
                  <li className='py-3'>11. Maintenance Bypass</li>
                  <li className='py-3'>
                    12. Monitoring via SNMP or Dry contact
                  </li>
                  <li className='py-3'>13. 24 months warranty</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row text-start gap-10 mt-7'>
            {/* RIGHT SIDE (IMAGE) */}
            <div className='w-full md:w-1/2'>
              <div className='flex flex-col gap-4'>
                <img
                  src={assets.getstarted_img_5}
                  alt=''
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>

            {/* LEFT SIDE (TEXT) */}
            <div className='w-full md:w-1/2 space-y-10'>
              <div>
                <h2 className='text-2xl font-bold text-gray-800 mb-2 mt-10'>
                  ELT-3P SERIES 160 - 600KVA
                </h2>
                <p className=' text-gray-800 leading-relaxed'>Main Features</p>
                <ul className='px-2 mt-2 gap-5'>
                  <li className='py-3'>1. Online double conversion</li>
                  <li className='py-3'>2. Fully DSP control</li>
                  <li className='py-3'>3. IGBT rectifier</li>
                  <li className='py-3'>4. Wide input voltage range</li>
                  <li className='py-3'>
                    5. Advanced battery charging management
                  </li>
                  <li className='py-3'>6. High reliability and performance</li>
                  <li className='py-3'>7. Small footprint design</li>
                  <li className='py-3'>8. Intelligent fan speed control</li>
                  <li className='py-3'>9. ECO and EPO function</li>
                  <li className='py-3'>
                    10. Intelligent RS323 / RS485 Communication port
                  </li>
                  <li className='py-3'>11. Maintenance Bypass</li>
                  <li className='py-3'>
                    12. Monitoring via SNMP or Dry contact
                  </li>
                  <li className='py-3'>13. 24 months warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className='mt-5 text-start text-gray-600'>
          <h4 className=' text-2xl'>Modular Data Center</h4>
          <p className=' leading-relaxed mb-3'>
            Containing an entire row of air can improve capacity and energy efficiency by reducing by-pass airflow. The data center is fraught with power and cooling challenges. For every 50 kW of power the data center feeds to an aisle, the same facilities typically apply 100-150 kW of cooling to maintain desirable equipment inlet temperatures. Most legacy data centers waste more than 60 percent of that cooling energy in the form of bypass air. </p>

           <p className='leading-relaxed mb-3'>Data centers need more effective airflow management solutions as equipment power densities increase in the racks. Five years ago, the average rack power density was one to two kW per rack. Today, the average power density is four to eight kW per rack and some data centers that run high density applications are averaging 10 to 20 kW per rack. </p>

            <p className='leading-relaxed mb-3'>Containment makes existing cooling and power infrastructure more effective. Using containment, the data center makes increasingly efficient use of the same or less cooling, reducing the cooling portion of the total energy bill. Data centers can even power down some CRAC units, saving utility and maintenance costs.</p>

            <p className='leading-relaxed mb-3'>Containment makes running racks at high densities more affordable so that data centers can add new IT equipment such as blade servers. Data center containment brings the power consumption to cooling ratio down to a nearly 1 to 1 match in kW consumed. It can save a data center approximately 30-percent of its annual utility bill (lower OpEx) without additional CapEx.
          </p>

          <div className='max-w-7xl mx-auto flex flex-col md:flex-row text-start gap-10 mt-7'>
            {/* RIGHT SIDE (IMAGE) */}
            <div className='w-full md:w-1/2'>
              <div className='flex flex-col gap-4'>
                <img
                  src={assets.getstarted_img_7}
                  alt=''
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>

            {/* LEFT SIDE (TEXT) */}
            <div className='w-full md:w-1/2 space-y-10'>
              <div>
                <p className=' text-gray-800 leading-relaxed relative md:mt-20'>
                 Optimizing efficiency of Data Center facility equipment thereby reducing operational and maintenance costs is a key consideration in Data Center design.
                 Traditional data centers employ a hot aisle/cold aisle arrangement of the IT racks. The fronts of the racks face each other and draw cold air into the rack to cool rack mounted IT devices (i.e. servers, switches, storage, etc.). Conversely, the rear sides of the rows of racks face one another, expelling the hot air into the hot aisle. However, a limitation of hot aisle/cold aisle designs is that the air is free to move wherever it will. Further gains will be achieved if the hot/cold air is contained and channeled in appropriate directions.
                </p>
              </div>
            </div>
          </div>
        </div>  {/*---Div to be copied and repasted------*/}


        <div className='mt-15 text-start text-gray-600'>
          <h4 className=' text-2xl'>Data Center Management Systems</h4>
          <p className=' leading-relaxed'>
            An important objective for DCIM is an integrated approach to monitoring, where every aspect of the Data Center is monitored from a single source. Both IT and Facility equipment will be monitored, including their interrelationships, to give a holistic view of the Data Center Environment. The living, breathing 3D model gives you a rich understanding of - and control over - the complex web of interrelationships that exist between assets. And unleashes new opportunities to create efficiency and business value in the design, management, and optimization of the modern data center, thus providing a myriad of benefits.
          </p>
            <h2 className=' text-gray-600 mt-2'>
                  With DCIM IT teams can:
            </h2>
          <ol className='px-2 mt-2'>
            <li>1. Locate, visualize and manage all of their physical assets within an integrated “single pane” view of the entire infrastructure</li>
            <li>2. Automate the commissioning of new equipment, reducing the need for manual tasks</li>
            <li>3. Automate capacity planning with unparalleled forecasting abilities</li>
            <li>4. Visualize effects of Moves, Adds and Changes to the overall Data Center operations</li>
            <li>5. Reduce energy consumption, energy costs and carbon footprint</li>
            <li>6. Align IT to the needs of the business</li>
          </ol>

         
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row text-start gap-10 mt-7'>
            {/* RIGHT SIDE (IMAGE) */}
            <div className='w-full md:w-1/2'>
              <div className='flex flex-col gap-4'>
                <img
                  src={assets.getstarted_img_8}
                  alt=''
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>

            {/* LEFT SIDE (TEXT) */}
            <div className='w-full md:w-1/2 space-y-10'>
              <div>
                <p className=' text-gray-600 leading-relaxed'>
                   DCIM is a term representing a suite of infrastructure solutions for Data Center management which, when properly deployed, can help IT personnel manage all aspects of the Data Center infrastructure, including Power, Cooling, Space and Networks.
                 </p>
                 <p className=' text-gray-600 leading-relaxed'>
                 It provides a nexus between IT and Facility teams enabling transparency and streamlined processes.  
                 </p>
              </div>
            </div>
          </div>
           <div className='px-2 mt-2'>
           <h3 className='font-bold text-gray-800'>Solutions for every environment</h3>
           <p className='mb-2 text-gray-600 leading-relaxed'>Toptech Engineering Limited has mastered the complexities of Data Center management. With our expertise in deploying leading DCIM solutions, including Sunbird dcTrack and Vertiv Trellis, along with custom integration middleware, we provide a DCIM solution suitable for each Data Center, regardless of size or scale.</p>
           <p className='mb-2 text-gray-600 leading-relaxed'>We guarantee successful implementations to the satisfaction of the customer, along with dedicated support to ensure continuous value from your investment.</p>
          </div>
        </div>

        

      </div>  {/*-------End Of Parent Div: All texts should be in this div--------*/}
      <FaultCall/>
      <Gallery/>
    </div>
  )
}

export default GetStarted
