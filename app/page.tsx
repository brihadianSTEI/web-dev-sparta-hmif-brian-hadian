import Image from "next/image";
import { MainLayout } from "./layout";

const Home = () => {
  return (
    <main>
      <nav style={{display : "flex", justifyContent: "space-between", margin : 5, padding : 10, backgroundColor : "beige", borderRadius: 10}}>
          <div><a href="">
            <Image
            src={"/images/Software Engineering_SPARTA HMIF 2023_Brian Hadian.png"}
            alt="Homepage"
            width={40}
            height={40}
            />
            </a>
          </div>

          <div style={{display : "flex"}}>
            <div style={{marginRight : 10}}>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKjFvcbQLbCthHBshXVJDpDTZwhWmCkdvFmFmSRRtVlXFXVQSTtfBPcBczfBKcnbwNQ" target="_blank">
                <Image
                src={"/images/gmail.png"}
                alt="Gmail"
                width={40}
                height={40}
                />
              </a>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/brian-hadian-stei-86217630a/" target="_blank">
                <Image
                src={"/images/linkedin.png"}
                alt="Linkedin"
                width={40}
                height={40}
                />
              </a>
            </div>

          </div>
      </nav>
    
      <MainLayout

        children1 = {
          <div style={{display:"flex", justifyContent : "center", alignItems : "center", height :'150vh', padding : 10}}>
            <Image
              src={"/images/profile_photo.jpg"}
              alt="Brian's Photo"
              width={600}
              height={800}
            />
          </div>}
      

        children2 = {
        <div style={{display: "block"}}>
          <div style={{margin : 10}}>
            <div style={{display : "flex", fontWeight : 800, fontSize : 50,  justifyContent : "center", margin : 10}}>
              A little about me
              </div>
            <div>Hello. You can call me Brian and now, I'm attending Computer Science Major in
              Institut Teknologi Bandung. I was born Tuesday, 14 March 2006 and 
              I'm from Bandung City in West Java, Indonesia. I also used to attend SMA
              Negeri 3 Bandung and SMP Negeri 5 Bandung. 
              For the most part, I'm interested in everything about music, most of 
              computer science, part of social science, and not much about business.
              My hobbies are mainly music, computer, exercise and trying something new.
              Well enough for templates stuff, my story till I came to this point in 
              life consisted of countless countributions from my nearest companies 
              and friends from college. Thus, I wish you a great day!</div>
          </div>

          {/* Interests and talents */}
          <div style={{margin : 10}}>
            <div style={{display: "flex", fontWeight : 600, fontSize : 35, justifyContent : "center", margin : 10}}>
              Interests and Talents 
            </div>

            <div>
              <div style={{display : "flex"}}>
                <div style={{margin : 5}}>
                  <Image
                    src={"/images/diamond.png"}
                    alt="diamond"
                    width={20}
                    height={20}
                  />

                </div>

                <div style={{margin : 5}}>
                  Software Engineering
                </div>
              </div>

              <div style={{display : "flex"}}>
                <div style={{margin : 5}}>
                  <Image
                    src={"/images/diamond.png"}
                    alt="diamond"
                    width={20}
                    height={20}
                  />

                </div>

                <div style={{margin : 5}}>
                  Music
                </div>

              </div>


              <div style={{display : "flex"}}>
                <div style={{margin : 5}}>
                  <Image
                    src={"/images/diamond.png"}
                    alt="diamond"
                    width={20}
                    height={20}
                  />
                </div>

                <div style={{margin : 5}}>
                  Calisthenics
                </div>
              </div>
            </div>
          </div>

          {/* Projects and Contributions */}
          <div style={{margin : 10}}>
            <div style={{display: "flex", fontWeight : 600, fontSize : 35, justifyContent : "center", margin : 10}} >
              Projects and Contributions
            </div>

            <div>
              <div style={{display : "flex"}}>
                <div style={{margin : 5}}>
                  <Image
                    src={"/images/checkbox.png"}
                    alt="checkbox"
                    width={20}
                    height={20}
                  />                  
                </div>

                <div>

                  <div style={{margin : 5, fontWeight : 500}}>
                    IEEE Logistics Staff
                  </div>

                  <div style={{marginLeft : 5, marginRight: 5}}>
                    Able to supply additional event requirements in less than 24 hours
                  </div>

                </div>
              </div>   

               <div style={{display : "flex"}}>
                <div style={{margin : 5}}>
                  <Image
                    src={"/images/checkbox.png"}
                    alt="checkbox"
                    width={20}
                    height={20}
                  />                  
                </div>

                <div>
                  <div style={{margin : 5, fontWeight : 500}}>
                    STEI-K 2023 Student Leader Election : Event Division
                  </div>

                  <div style={{marginLeft : 5, marginRight: 5}}>
                    Able to accomodate every student STEI-K 2023, Supervise in General Debate,
                    Able to improvise event plan when venue doesn't match with original plan
                  </div>
                </div>
              </div>

              <div style={{display : "flex"}}>
                <div style={{margin : 5}}>
                  <Image
                    src={"/images/checkbox.png"}
                    alt="checkbox"
                    width={20}
                    height={20}
                  />                  
                </div>

                <div>
                  <div style={{margin : 5, fontWeight : 500}}>
                    STEI-K 2023 Student Action STEIKOOL 2023 : HR Division
                  </div>

                  <div style={{marginLeft : 5, marginRight: 5}}>
                    Able to accomodate every member's needs, Able to improvise when 
                    there isn't food accomodation for participants, Supervise logistics
                    plan of projector needs in every class.
                  </div>
                </div>
              </div>

              <div style={{display : "flex"}}>
                <div style={{margin : 5}}>
                  <Image
                    src={"/images/checkbox.png"}
                    alt="checkbox"
                    width={20}
                    height={20}
                  />                  
                </div>

                <div>
                  <div style={{margin : 5, fontWeight : 500}}>
                    Contrabassist and Co-Leader Mini Concert ISO 2024 : Twilight Serenade
                  </div>

                  <div style={{marginLeft : 5, marginRight: 5}}>
                    Able to accomodate every participants and technical needs. Supervise in Final Day.
                    Able to rearrange multiple genre/style in particular piece in less than 3 days.
                  </div>
                </div>

              </div> 

              <div style={{display : "flex"}}>
                <div style={{margin : 5}}>
                  <Image
                    src={"/images/checkbox.png"}
                    alt="checkbox"
                    width={20}
                    height={20}
                  />                  
                </div>

                <div>
                  <div style={{margin : 5, fontWeight : 500}}>
                    STEI-K 2023 Student Jacket : Finance Manager 
                  </div>

                  <div style={{marginLeft : 5, marginRight: 5}}>
                    Able to do subsidies plan for every student of STEI-K 2023 with
                    related rules. Able to give profit for Student Board STEI-K 2023
                    nearly 1.5 million Indonesian Rupiah.
                  </div>
                </div>

              </div>

              <div style={{display : "flex"}}>
                <div style={{margin : 5}}>
                  <Image
                    src={"/images/checkbox.png"}
                    alt="checkbox"
                    width={20}
                    height={20}
                  />                  
                </div>

                <div>
                  <div style={{margin : 5, fontWeight : 500}}>
                    Contrabassist Closing IMPACT 4.0 
                  </div>

                  <div style={{marginLeft : 5, marginRight: 5}}>
                    Able to rearrange and master musical piece in less than 2 days.
                  </div>
                </div>

              </div>
  
            </div>
          </div>
        </div>
        }
      />
    </main>
  )
};

export default Home;