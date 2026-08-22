/* Question bank written from the FAA Remote Pilot Study Guide (FAA-G-8082-22,
   August 2016) and AC 107-2A (February 2021), which covers the rules added
   after the study guide: night operations, operations over people, and remote
   identification. Each question cites the page it was drawn from; the printed
   label is turned into a PDF deep link through data/manual-pages.js. Questions
   citing the AC carry "manual": "ac". */
const QUESTION_BANK = [
 {
  "id": "s1-001",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Which regulations must a remote pilot flying under Part 107 be familiar with?",
  "choices": [
   "14 CFR part 107, every part it references, and AC 107-2",
   "Only 14 CFR part 107 itself, since it is a self-contained rule",
   "14 CFR part 91 and the general operating rules for manned aircraft",
   "Only the advisory circulars the FAA publishes for small UAS"
  ],
  "answer": 0,
  "explanation": "A remote pilot must know 14 CFR part 107, all of the regulations that part 107 references, and the guidance in AC 107-2. Part 107 alone is not enough because it points to other parts, and advisory circulars supplement the regulations rather than replace them.",
  "page": "3"
 },
 {
  "id": "s1-002",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Which regulation contains the registration and marking requirements for small unmanned aircraft?",
  "choices": [
   "14 CFR part 48",
   "14 CFR part 43",
   "14 CFR part 61",
   "14 CFR part 71"
  ],
  "answer": 0,
  "explanation": "14 CFR part 48 is the regulation for registration and marking of small unmanned aircraft. It covers the requirement to register, who is eligible, who may apply, the application itself, and where the unique identifier must be displayed.",
  "page": "76"
 },
 {
  "id": "s1-003",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Who has the final authority for the safe operation of a small unmanned aircraft during a Part 107 flight?",
  "choices": [
   "The remote pilot in command of the flight",
   "The visual observer watching the aircraft",
   "The person manipulating the flight controls",
   "The nearest air traffic control facility"
  ],
  "answer": 0,
  "explanation": "Just like the pilot in command of a manned aircraft, the remote PIC is directly responsible for, and is the final authority for, the safe operation of the small unmanned aircraft. Observers and persons on the controls work under the remote PIC's authority.",
  "page": "5-1",
  "manual": "ac"
 },
 {
  "id": "s1-004",
  "section": 1,
  "sectionName": "Regulations",
  "question": "How many small unmanned aircraft may one person operate as remote PIC at the same time?",
  "choices": [
   "Only one, even when automation is used",
   "Up to two if a visual observer assists with each",
   "Up to three if all remain within visual line of sight",
   "As many as the control station is designed to manage"
  ],
  "answer": 0,
  "explanation": "A person may not act as remote PIC or visual observer for more than one small unmanned aircraft at the same time. Using automation does not change this; the one-aircraft limit still applies.",
  "page": "5-1",
  "manual": "ac"
 },
 {
  "id": "s1-005",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Which documents must a remote PIC have in physical possession and readily accessible during flight operations?",
  "choices": [
   "The remote pilot certificate and personal identification",
   "The aircraft maintenance log and preflight checklist",
   "A current aviation weather briefing for the flight area",
   "The manufacturer's operating handbook for the aircraft"
  ],
  "answer": 0,
  "explanation": "During flight operations the remote PIC must physically possess, and keep readily accessible, the remote pilot certificate and personal identification. Other paperwork can be useful, but these two items are what the rule requires the pilot to carry.",
  "page": "5-1",
  "manual": "ac"
 },
 {
  "id": "s1-006",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Under what condition may two certificated remote pilots transfer remote PIC duties to each other during an operation?",
  "choices": [
   "Both pilots can keep the aircraft in visual line of sight during the handoff",
   "The aircraft is landed before operational control passes to the other pilot",
   "Air traffic control approves the transfer before it takes place",
   "The outgoing pilot files a written transfer report with the FAA"
  ],
  "answer": 0,
  "explanation": "Certificated remote pilots may hand off the remote PIC role only if both are capable of maintaining visual line of sight of the aircraft without losing control, and the transfer is positively communicated. The pilot assuming control takes on responsibility for the safe operation.",
  "page": "5-1",
  "manual": "ac"
 },
 {
  "id": "s1-007",
  "section": 1,
  "sectionName": "Regulations",
  "question": "May a person who holds no remote pilot certificate fly a small unmanned aircraft under Part 107?",
  "choices": [
   "Yes, if directly supervised by a remote PIC who can take immediate direct control",
   "Yes, as long as a certificated remote pilot approved the flight plan beforehand",
   "No, every person who touches the controls must hold a remote pilot certificate",
   "Yes, but only when the flight stays below 200 feet above ground level"
  ],
  "answer": 0,
  "explanation": "An uncertificated person may manipulate the controls only under the direct supervision of a remote PIC, and the remote PIC must be able to take immediate, direct control of the aircraft, for example through a buddy-box setup, by standing close enough to grab the controls, or by triggering an automated safe mode.",
  "page": "5-1",
  "manual": "ac"
 },
 {
  "id": "s1-008",
  "section": 1,
  "sectionName": "Regulations",
  "question": "When must a small unmanned aircraft be registered for operations under Part 107?",
  "choices": [
   "Before it is operated, under either part 47 or part 48",
   "Within 30 days after its first commercial flight",
   "Only if it will be flown inside controlled airspace",
   "After it passes an FAA airworthiness inspection"
  ],
  "answer": 0,
  "explanation": "A small unmanned aircraft must be registered under part 47 or part 48 before it is operated under Part 107. Part 48 provides the streamlined online registration option for aircraft that will be operated only within the territorial limits of the United States.",
  "page": "5-2",
  "manual": "ac"
 },
 {
  "id": "s1-009",
  "section": 1,
  "sectionName": "Regulations",
  "question": "The remote PIC glances down at the controller to check battery life and briefly loses sight of the aircraft. What does the visual line of sight rule require?",
  "choices": [
   "Regain sight of the aircraft as soon as practicable",
   "Land the aircraft immediately at the nearest clear area",
   "Notify air traffic control that visual contact was lost",
   "Climb the aircraft higher so that it is easier to spot"
  ],
  "answer": 0,
  "explanation": "Brief moments without direct sight, such as checking the controller, are acceptable as long as the pilot retains the capability to see the aircraft or quickly bring it back into view. If sight is lost, it must be regained as soon as practicable; no specific time interval of interruption is permitted by rule.",
  "page": "5-5",
  "manual": "ac"
 },
 {
  "id": "s1-010",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Which type of vision satisfies the visual line of sight requirement of Part 107?",
  "choices": [
   "Unaided vision, or vision corrected by eyeglasses or contact lenses",
   "A first person view camera feed displayed at the control station",
   "Binoculars used continuously by the remote pilot in command",
   "Control station telemetry showing the aircraft's position and altitude"
  ],
  "answer": 0,
  "explanation": "Visual line of sight must be maintained with unaided vision, except for ordinary eyeglasses or contact lenses. Vision aids like binoculars may be used only momentarily to enhance situational awareness, and first person view devices never satisfy the requirement.",
  "page": "5-6",
  "manual": "ac"
 },
 {
  "id": "s1-011",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What is the role of a visual observer in a Part 107 operation?",
  "choices": [
   "An optional crewmember who supplements situational awareness",
   "A required crewmember on any flight beyond 400 feet from the pilot",
   "A certificated pilot ready to take control if the remote PIC cannot",
   "An FAA designee who confirms the preflight inspection was completed"
  ],
  "answer": 0,
  "explanation": "Using a visual observer is optional. A VO supplements situational awareness and visual line of sight, freeing the remote PIC and the person on the controls for other mission-critical duties. The VO must be able to communicate the aircraft's location, attitude, altitude, and direction, the position of other aircraft or hazards, and whether the aircraft endangers life or property.",
  "page": "5-6",
  "manual": "ac"
 },
 {
  "id": "s1-012",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What must a remote pilot obtain before operating in Class B, Class C, or Class D airspace, or within the lateral boundaries of surface-area Class E airspace designated for an airport?",
  "choices": [
   "Prior authorization from air traffic control",
   "A logged two-way radio check with the control tower",
   "A waiver of the visual line of sight requirement",
   "A NOTAM filed at least 24 hours before the launch"
  ],
  "answer": 0,
  "explanation": "Operations in Class B, C, or D airspace, or in the surface area of Class E airspace designated for an airport, are not permitted without prior authorization from air traffic control. The FAA may approve or deny requests based on traffic density, controller workload, communication issues, and similar factors.",
  "page": "5-7",
  "manual": "ac"
 },
 {
  "id": "s1-013",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What is required to operate a small unmanned aircraft near an airport that lies in uncontrolled airspace?",
  "choices": [
   "No authorization, but the pilot must avoid interfering with airport traffic and yield right-of-way",
   "Prior notification to the airport manager and the control tower at least one day before the flight",
   "An air traffic control authorization obtained through the FAA website before every launch",
   "A visual observer stationed on the airport property to watch the traffic pattern for conflicts"
  ],
  "answer": 0,
  "explanation": "Unless the flight is in controlled airspace, no notification or authorization is needed to operate at or near an airport. The remote PIC must still avoid traffic patterns, approach corridors, runways, taxiways, and helipads, and must yield right-of-way to all other aircraft, including aircraft on the airport surface.",
  "page": "5-7",
  "manual": "ac"
 },
 {
  "id": "s1-014",
  "section": 1,
  "sectionName": "Regulations",
  "question": "During the preflight check a flight control surface does not respond correctly to control station inputs. What must the remote PIC do?",
  "choices": [
   "Not conduct flight operations until every control surface moves correctly",
   "Fly a short low test hover to confirm whether the fault repeats in the air",
   "Continue the flight if the autopilot is able to compensate for the surface",
   "Log the discrepancy and restrict the flight to half the planned altitude"
  ],
  "answer": 0,
  "explanation": "Before each flight the remote PIC must verify through the control station that the control surfaces needed for safe flight move correctly. If any surface does not respond correctly, flight operations may not be conducted until correct movement of all flight control surfaces is established.",
  "page": "5-10",
  "manual": "ac"
 },
 {
  "id": "s1-015",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What is the maximum allowable groundspeed for a small unmanned aircraft under Part 107?",
  "choices": [
   "87 knots (100 miles per hour)",
   "80 knots (92 miles per hour)",
   "95 knots (109 miles per hour)",
   "100 knots (115 miles per hour)"
  ],
  "answer": 0,
  "explanation": "A small unmanned aircraft may not be flown faster than a groundspeed of 87 knots, which is 100 miles per hour. The pilot can verify compliance with a GPS groundspeed readout, by timing the aircraft between fixed points, or by relying on a manufacturer's installed speed limiter.",
  "page": "5-11",
  "manual": "ac"
 },
 {
  "id": "s1-016",
  "section": 1,
  "sectionName": "Regulations",
  "question": "How high may a small unmanned aircraft be flown when it is not operating near any structure?",
  "choices": [
   "400 feet above ground level",
   "400 feet above mean sea level",
   "500 feet above ground level",
   "200 feet above ground level"
  ],
  "answer": 0,
  "explanation": "The ceiling is 400 feet above ground level. The exception is flight within a 400-foot radius of a structure, where the aircraft may climb up to 400 feet above the structure's immediate uppermost limit.",
  "page": "5-11",
  "manual": "ac"
 },
 {
  "id": "s1-017",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What is the minimum flight visibility, as observed from the control station, for a Part 107 operation?",
  "choices": [
   "3 statute miles",
   "1 statute mile",
   "2 statute miles",
   "5 statute miles"
  ],
  "answer": 0,
  "explanation": "Visibility observed from the location of the control station may not be less than 3 statute miles. Local aviation weather reports are one way to establish this; without a reliable means of determining visibility, the flight cannot be conducted.",
  "page": "5-11",
  "manual": "ac"
 },
 {
  "id": "s1-018",
  "section": 1,
  "sectionName": "Regulations",
  "question": "How far must a small unmanned aircraft remain from clouds?",
  "choices": [
   "At least 500 feet below and 2,000 feet horizontally",
   "At least 1,000 feet below and 1 statute mile horizontally",
   "At least 500 feet above and 1,000 feet horizontally",
   "Clear of clouds, with no specific distance required"
  ],
  "answer": 0,
  "explanation": "The aircraft must stay no less than 500 feet below a cloud and no less than 2,000 feet horizontally from it. It also may not be operated above any cloud, and there can be no obstruction to visibility, such as smoke or a cloud, between the aircraft and the remote PIC.",
  "page": "5-11",
  "manual": "ac"
 },
 {
  "id": "s1-019",
  "section": 1,
  "sectionName": "Regulations",
  "question": "From which kind of moving platform does Part 107 permit operating a small unmanned aircraft?",
  "choices": [
   "A land or water-borne vehicle over a sparsely populated area",
   "A moving aircraft flying over a sparsely populated area",
   "Any moving vehicle, provided a visual observer is driving",
   "A land vehicle in a congested area moving at low speed"
  ],
  "answer": 0,
  "explanation": "Operation from a moving land or water-borne vehicle is allowed over a sparsely populated area, and the sparsely-populated limit can be waived. Operation from a moving aircraft is prohibited outright, and no moving vehicle may be used when the aircraft is transporting another person's property for compensation or hire.",
  "page": "5-12",
  "manual": "ac"
 },
 {
  "id": "s1-020",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Which geographic limit applies when property is transported for compensation or hire under Part 107?",
  "choices": [
   "The transport must occur wholly within the bounds of a single state",
   "The transport may cross state lines if the flight stays below 400 feet",
   "The property may be carried only between FAA-designated landing sites",
   "The delivery distance is capped at 25 statute miles from the launch point"
  ],
  "answer": 0,
  "explanation": "Part 107 permits transporting property for compensation or hire, but the operation must be conducted within a confined area and the transport must occur wholly within the boundaries of a single state, in compliance with all Part 107 operating restrictions.",
  "page": "5-13",
  "manual": "ac"
 },
 {
  "id": "s1-021",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What weight limit applies when a small unmanned aircraft transports property for compensation or hire?",
  "choices": [
   "The aircraft and the property together must total under 55 pounds",
   "The property alone must weigh less than 55 pounds at takeoff",
   "The aircraft and the property together may total up to 100 pounds",
   "The property may not exceed one half of the aircraft's empty weight"
  ],
  "answer": 0,
  "explanation": "The maximum total weight of the small unmanned aircraft, including any property being transported, is limited to under 55 pounds. The flight must also remain within visual line of sight, and that limitation cannot be waived for the transportation of property.",
  "page": "5-13",
  "manual": "ac"
 },
 {
  "id": "s1-022",
  "section": 1,
  "sectionName": "Regulations",
  "question": "How long after consuming any alcoholic beverage must a person wait before serving as a crewmember on a small UAS operation?",
  "choices": [
   "8 hours",
   "4 hours",
   "12 hours",
   "24 hours"
  ],
  "answer": 0,
  "explanation": "A person may not serve as a remote PIC, visual observer, or other crewmember, or manipulate the controls, within 8 hours of consuming any alcoholic beverage. Being under the influence of alcohol or using a drug that affects mental or physical capability is prohibited regardless of the time elapsed.",
  "page": "5-13",
  "manual": "ac"
 },
 {
  "id": "s1-023",
  "section": 1,
  "sectionName": "Regulations",
  "question": "At what blood alcohol concentration is a person prohibited from participating in a small UAS operation?",
  "choices": [
   ".04 percent or greater",
   ".02 percent or greater",
   ".08 percent or greater",
   ".10 percent or greater"
  ],
  "answer": 0,
  "explanation": "A blood alcohol concentration of .04 percent or greater disqualifies a person from acting as remote PIC, visual observer, or other crewmember or from manipulating the controls. This is a stricter standard than the .08 limit commonly used for driving.",
  "page": "5-13",
  "manual": "ac"
 },
 {
  "id": "s1-024",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What may a remote PIC do when an in-flight emergency occurs?",
  "choices": [
   "Deviate from any rule of Part 107 to the extent the emergency requires",
   "Deviate only from the altitude and groundspeed operating limitations",
   "Nothing beyond landing immediately at the nearest safe open area",
   "Deviate from the rules only after obtaining air traffic control approval"
  ],
  "answer": 0,
  "explanation": "In an in-flight emergency, an unexpected serious situation demanding urgent action, the remote PIC may deviate from any Part 107 rule to the extent necessary to respond. If the FAA requests it, the pilot must send a written report explaining the deviation, and emergency action should minimize injury and property damage.",
  "page": "5-15",
  "manual": "ac"
 },
 {
  "id": "s1-025",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Which situation could the FAA treat as careless or reckless operation of a small unmanned aircraft?",
  "choices": [
   "Disregarding weather conditions near structures or rolling terrain in a densely populated area",
   "Operating from a parked vehicle beside a rural road while coordinating with a visual observer",
   "Flying at 300 feet above ground level in uncontrolled airspace a few miles from an airport",
   "Briefly glancing down at the control station display to check battery levels during a flight"
  ],
  "answer": 0,
  "explanation": "Careless or reckless operation is prohibited, and small UAS introduce hazards manned aviation does not have. Failing to consider weather conditions near structures, trees, or rolling terrain while flying in a densely populated area is the kind of conduct that can qualify.",
  "page": "5-15",
  "manual": "ac"
 },
 {
  "id": "s1-026",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What does a certificate of waiver issued under Part 107 permit?",
  "choices": [
   "Deviation from certain Part 107 provisions when the operation can be conducted safely",
   "Exemption from small unmanned aircraft registration for government-sponsored operations",
   "Operation of a small unmanned aircraft by a pilot whose certificate has been suspended",
   "Carriage of another person's property for hire beyond the pilot's visual line of sight"
  ],
  "answer": 0,
  "explanation": "A certificate of waiver lets an operation deviate from certain provisions of Part 107 when the Administrator finds it can be conducted safely under the waiver's terms. Waivable sections include operation from moving vehicles, visual line of sight, visual observer, multiple aircraft, right-of-way, certain airspace, and the operating limitations, but no visual line of sight waiver is issued for carrying another person's property for compensation or hire.",
  "page": "5-15",
  "manual": "ac"
 },
 {
  "id": "s1-027",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What is the minimum age to apply for a remote pilot certificate with a small UAS rating?",
  "choices": [
   "16 years old",
   "13 years old",
   "18 years old",
   "21 years old"
  ],
  "answer": 0,
  "explanation": "An applicant for a remote pilot certificate with a small UAS rating must be at least 16 years of age. The other eligibility requirements cover English language ability, physical and mental condition, and passing the initial aeronautical knowledge test or completing the qualifying training.",
  "page": "6-1",
  "manual": "ac"
 },
 {
  "id": "s1-028",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Which English language standard must a remote pilot certificate applicant meet?",
  "choices": [
   "Be able to read, speak, write, and understand English",
   "Speak and understand English at a conversational level",
   "Read and write English, with spoken fluency being optional",
   "Demonstrate English proficiency only during the knowledge test"
  ],
  "answer": 0,
  "explanation": "Eligibility requires the ability to read, speak, write, and understand the English language. All four skills are named in the requirement; it is not limited to the test setting or to spoken conversation.",
  "page": "6-1",
  "manual": "ac"
 },
 {
  "id": "s1-029",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Which medical standard applies to an applicant for a remote pilot certificate?",
  "choices": [
   "No physical or mental condition that would interfere with safe operation",
   "A third-class medical certificate issued by an aviation medical examiner",
   "An FAA medical questionnaire renewed every 24 calendar-months",
   "A vision screening showing eyesight correctable to 20/20 in both eyes"
  ],
  "answer": 0,
  "explanation": "No airman medical certificate is required. The applicant must instead be in a physical and mental condition that would not interfere with the safe operation of a small UAS, and the operating rules bar anyone who knows of such a condition from participating in an operation.",
  "page": "6-1",
  "manual": "ac"
 },
 {
  "id": "s1-030",
  "section": 1,
  "sectionName": "Regulations",
  "question": "A pilot holds a part 61 certificate, other than a student pilot certificate, and meets the part 61 flight review requirement. How may this pilot qualify for a remote pilot certificate?",
  "choices": [
   "By successfully completing the FAA's online Part 107 training instead of the knowledge test",
   "By passing a practical flight demonstration with an FAA designated pilot examiner",
   "By logging at least 10 hours of supervised small UAS flight time with an instructor",
   "By mailing a copy of the part 61 pilot certificate to the FAA registry with an application"
  ],
  "answer": 0,
  "explanation": "A part 61 certificate holder, other than a student pilot, who meets the flight review requirements of section 61.56 may complete the online Part 107 small UAS training at faasafety.gov instead of taking the initial aeronautical knowledge test. Everyone else must pass the knowledge test at an FAA-approved testing center.",
  "page": "6-1",
  "manual": "ac"
 },
 {
  "id": "s1-031",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What happens when a remote pilot certificate applicant fails the TSA security vetting?",
  "choices": [
   "No temporary or permanent certificate is issued, and the applicant may appeal to the TSA",
   "A temporary certificate is issued while the FAA completes a further investigation",
   "The applicant may retake the aeronautical knowledge test after 30 calendar days",
   "The FAA issues the certificate but attaches airspace-related operating restrictions"
  ],
  "answer": 0,
  "explanation": "The TSA vets every applicant before a temporary remote pilot certificate is issued. If the vetting is unsuccessful, the applicant is disqualified and receives neither a temporary nor a permanent certificate, and someone who believes the security threat assessment was improperly failed may appeal the decision to the TSA.",
  "page": "6-4",
  "manual": "ac"
 },
 {
  "id": "s1-032",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What must every applicant establish in the IACRA system before taking any FAA airman knowledge test?",
  "choices": [
   "An FAA Tracking Number",
   "A student pilot certificate",
   "A knowledge test exam identification number",
   "A temporary airman certificate"
  ],
  "answer": 0,
  "explanation": "Since January 13, 2020, all applicants must establish an FAA Tracking Number (FTN) in IACRA before taking any FAA airman knowledge test. The FTN is printed on the Airman Knowledge Test Report in place of the old applicant ID number.",
  "page": "6-4",
  "manual": "ac"
 },
 {
  "id": "s1-033",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What must an applicant bring to the testing center on the day of the initial aeronautical knowledge test?",
  "choices": [
   "Proper government-issued photo identification",
   "A completed FAA Form 8710-13 signed by an instructor",
   "A logbook endorsement from a certificated flight instructor",
   "Proof of small UAS registration in the applicant's own name"
  ],
  "answer": 0,
  "explanation": "The initial aeronautical knowledge test is given at an FAA-approved knowledge testing center by appointment, and on test day the applicant must provide proper government-issued photo identification. The certificate application comes after the test, not before it.",
  "page": "6-4",
  "manual": "ac"
 },
 {
  "id": "s1-034",
  "section": 1,
  "sectionName": "Regulations",
  "question": "How often must a remote pilot complete recurrent training to keep exercising certificate privileges?",
  "choices": [
   "Within 24 calendar-months of the initial knowledge test or the most recent training",
   "Within 12 calendar-months of the initial knowledge test or the most recent training",
   "Within 36 calendar-months of the initial knowledge test or the most recent training",
   "Only when the FAA publishes a revision to the Part 107 regulations"
  ],
  "answer": 0,
  "explanation": "Recurrent training must be completed within 24 calendar-months of passing the initial knowledge test or completing the initial knowledge training, and each recurrent completion starts a new 24-calendar-month cycle. A pilot whose training lapses may not exercise the privileges of the certificate until the recurrent training is completed.",
  "page": "6-5",
  "manual": "ac"
 },
 {
  "id": "s1-035",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Under Part 107, the remote PIC must report an accident to the FAA when any person involved suffers which of the following?",
  "choices": [
   "A serious injury or any loss of consciousness",
   "Any injury that requires first aid at the scene",
   "Only an injury that results in a permanent disability",
   "Only an injury that proves fatal within 30 days"
  ],
  "answer": 0,
  "explanation": "An accident must be reported when it causes at least a serious injury to any person or any loss of consciousness, even a brief one. Injuries that need only first aid do not meet the threshold, and the rule is not limited to fatalities or permanent harm.",
  "page": "4-5",
  "manual": "ac"
 },
 {
  "id": "s1-036",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What standard does the FAA use to decide whether an injury from a small UAS accident counts as serious?",
  "choices": [
   "Level 3 or higher on the Abbreviated Injury Scale",
   "Level 5 or higher on the Abbreviated Injury Scale",
   "Any injury evaluated by emergency medical personnel",
   "Any injury that requires an ambulance transport"
  ],
  "answer": 0,
  "explanation": "A serious injury is one that rates Level 3 or higher on the Abbreviated Injury Scale (AIS) of the Association for the Advancement of Automotive Medicine. An AIS Level 3 example is an injury requiring hospitalization that can fully heal, such as head trauma, a broken bone, or a laceration that needs suturing.",
  "page": "4-5",
  "manual": "ac"
 },
 {
  "id": "s1-037",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Which of these small UAS accident outcomes requires a damage report to the FAA?",
  "choices": [
   "$800 in repairs to a parked car the drone struck",
   "$2,500 in repairs to the small unmanned aircraft itself",
   "$450 to replace a mailbox the drone destroyed",
   "$600 in repairs to a sign with a $300 replacement value"
  ],
  "answer": 0,
  "explanation": "Property damage is reportable when the cost to repair or replace the property, whichever is lower, is greater than $500. Damage to the small unmanned aircraft itself never counts, damage at or below $500 does not qualify, and when repair cost and the property's value differ, the lower figure is what gets compared with $500.",
  "page": "4-5",
  "manual": "ac"
 },
 {
  "id": "s1-038",
  "section": 1,
  "sectionName": "Regulations",
  "question": "How long after an accident that meets a reporting threshold does the remote PIC have to report it to the FAA?",
  "choices": [
   "10 calendar days",
   "30 calendar days",
   "5 calendar days",
   "24 hours"
  ],
  "answer": 0,
  "explanation": "The accident report must be made within 10 calendar days of the operation that caused the serious injury or property damage.",
  "page": "4-6",
  "manual": "ac"
 },
 {
  "id": "s1-039",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Which method may a remote PIC use to submit a required small UAS accident report?",
  "choices": [
   "Electronically or by phone to an FAA Regional Operations Center",
   "Only by certified mail addressed to the nearest NTSB regional field office",
   "Only in person at a Flight Standards District Office",
   "By radio to the closest air traffic control facility"
  ],
  "answer": 0,
  "explanation": "The report goes to the appropriate FAA Regional Operations Center, either electronically through the FAA's UAS website or by telephone, and it may also be made to the responsible Flight Standards office. Mail, radio, and in-person-only channels are not among the methods the AC gives.",
  "page": "4-6",
  "manual": "ac"
 },
 {
  "id": "s1-040",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Which item does the AC list as information a small UAS accident report should include?",
  "choices": [
   "The FAA registration number issued to the aircraft",
   "The serial numbers of the aircraft's flight batteries",
   "The remote pilot's total hours of flight experience",
   "A repair invoice for the property that was damaged"
  ],
  "answer": 0,
  "explanation": "The report should include the remote PIC's name, contact information, and airman certificate number, the aircraft's FAA registration number, the location, date, and local time of the accident, whether any serious injury or fatality occurred, the property damaged and the extent of the damage, and a description of what happened.",
  "page": "4-6",
  "manual": "ac"
 },
 {
  "id": "s1-041",
  "section": 1,
  "sectionName": "Regulations",
  "question": "What action can result from knowingly providing false records or reports about a small UAS operation to the FAA?",
  "choices": [
   "Civil sanctions and suspension or revocation of a certificate or waiver",
   "A mandatory retake of the aeronautical knowledge test",
   "A written warning that stays on file for two years",
   "Permanent forfeiture of the small unmanned aircraft to the Department of Transportation"
  ],
  "answer": 0,
  "explanation": "Because the FAA relies on the information owners and remote pilots provide when it authorizes operations, anyone who fraudulently or knowingly gives false records or reports, or alters records for fraudulent purposes, faces civil sanctions and the suspension or revocation of a certificate or waiver under section 107.5.",
  "page": "4-5",
  "manual": "ac"
 },
 {
  "id": "s1-042",
  "section": 1,
  "sectionName": "Regulations",
  "question": "Under NTSB regulations, an unmanned aircraft accident involving substantial damage must be reported when the aircraft's maximum gross takeoff weight is at least how many pounds?",
  "choices": [
   "300 pounds",
   "55 pounds",
   "150 pounds",
   "500 pounds"
  ],
  "answer": 0,
  "explanation": "NTSB rules in 49 CFR part 830 require immediate notification of an unmanned aircraft accident, which includes any death or serious injury, or substantial damage to an aircraft with a maximum gross takeoff weight of 300 pounds or greater. This notification is in addition to the report made to the FAA Regional Operations Center.",
  "page": "4-7",
  "manual": "ac"
 },
 {
  "id": "s2-001",
  "section": 2,
  "sectionName": "Airspace",
  "question": "The FAA divides all airspace into which two broad categories?",
  "choices": [
   "Controlled and uncontrolled",
   "Regulatory and nonregulatory",
   "Terminal and en route",
   "Domestic and international"
  ],
  "answer": 1,
  "explanation": "Airspace falls into two categories: regulatory and nonregulatory. Controlled, uncontrolled, special use, and other airspace are the four types found within those categories, not the categories themselves.",
  "page": "5"
 },
 {
  "id": "s2-002",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Within the two broad airspace categories, what are the four types of airspace?",
  "choices": [
   "Controlled, uncontrolled, special use, and other airspace",
   "Class A, Class B, Class C, and Class D airspace",
   "Terminal, en route, oceanic, and offshore military airspace",
   "Prohibited, restricted, warning, and alert area airspace"
  ],
  "answer": 0,
  "explanation": "The four types of airspace are controlled, uncontrolled, special use, and other airspace. Which type applies to a given block depends on the density and complexity of traffic, the nature of the operations conducted there, the level of safety required, and national and public interest.",
  "page": "5"
 },
 {
  "id": "s2-003",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Class B airspace generally extends from the surface up to what altitude?",
  "choices": [
   "4,000 feet MSL",
   "14,500 feet MSL",
   "10,000 feet MSL",
   "18,000 feet MSL"
  ],
  "answer": 2,
  "explanation": "Class B airspace generally runs from the surface to 10,000 feet MSL. Each area is individually tailored from a surface area plus two or more layers, and it is designed to contain all published instrument procedures once an aircraft enters it.",
  "page": "5"
 },
 {
  "id": "s2-004",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Class B airspace surrounds which kind of airports?",
  "choices": [
   "Any airport with an operating control tower",
   "Airports served by a radar approach control",
   "Military airfields with instrument procedures",
   "The nation's busiest airports"
  ],
  "answer": 3,
  "explanation": "Class B surrounds the busiest airports in the country, measured by airport operations or passenger enplanements. A control tower alone puts an airport in Class D, and a tower plus radar approach control with enough IFR traffic or enplanements puts it in Class C.",
  "page": "5"
 },
 {
  "id": "s2-005",
  "section": 2,
  "sectionName": "Airspace",
  "question": "What must a remote pilot do before operating a small unmanned aircraft inside Class B airspace?",
  "choices": [
   "Receive authorization from air traffic control",
   "File a VFR flight plan with Flight Service",
   "Broadcast intentions on the tower frequency",
   "Notify the airport manager in writing"
  ],
  "answer": 0,
  "explanation": "A remote pilot must receive ATC authorization before operating in Class B airspace, and the same requirement applies in Class C and Class D. Filing a flight plan or self-announcing on a frequency does not substitute for that authorization.",
  "page": "5"
 },
 {
  "id": "s2-006",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Class C airspace generally extends from the surface up to what height?",
  "choices": [
   "2,500 feet above the airport elevation",
   "4,000 feet above the airport elevation",
   "10,000 feet above the airport elevation",
   "1,200 feet above the airport elevation"
  ],
  "answer": 1,
  "explanation": "Class C runs from the surface to 4,000 feet above the airport elevation, charted in MSL. By comparison, Class D tops out at 2,500 feet above the airport elevation and Class B generally reaches 10,000 feet MSL.",
  "page": "6"
 },
 {
  "id": "s2-007",
  "section": 2,
  "sectionName": "Airspace",
  "question": "An airport surrounded by Class C airspace has which combination of services?",
  "choices": [
   "A control tower but no radar approach control service",
   "Radar approach control but no operating control tower",
   "An operating control tower plus radar approach control",
   "A Flight Service station providing local airport advisories"
  ],
  "answer": 2,
  "explanation": "Class C surrounds airports that have an operational control tower, are serviced by a radar approach control, and meet certain thresholds for IFR operations or passenger enplanements.",
  "page": "6"
 },
 {
  "id": "s2-008",
  "section": 2,
  "sectionName": "Airspace",
  "question": "In a typical Class C area, what is the radius of the inner surface area?",
  "choices": [
   "5 nautical miles",
   "10 nautical miles",
   "15 nautical miles",
   "20 nautical miles"
  ],
  "answer": 0,
  "explanation": "A typical Class C area consists of a surface area with a 5 NM radius plus an outer circle with a 10 NM radius that extends from 1,200 feet to 4,000 feet above the airport elevation.",
  "page": "6"
 },
 {
  "id": "s2-009",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Class D airspace generally extends from the surface up to what height?",
  "choices": [
   "4,000 feet above the airport elevation",
   "1,200 feet above ground level",
   "10,000 feet above mean sea level",
   "2,500 feet above the airport elevation"
  ],
  "answer": 3,
  "explanation": "Class D runs from the surface to 2,500 feet above the airport elevation (charted in MSL) and surrounds airports that have an operational control tower. A remote pilot needs ATC authorization before operating in it, just as in Class B and Class C.",
  "page": "6"
 },
 {
  "id": "s2-010",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Which statement defines Class E airspace?",
  "choices": [
   "All airspace where ATC provides no separation services",
   "Controlled airspace not classified as Class A, B, C, or D",
   "The uncontrolled airspace lying beneath the federal airway system",
   "Airspace reserved exclusively for aircraft flying IFR"
  ],
  "answer": 1,
  "explanation": "Class E is the controlled airspace that is not Class A, B, C, or D. A large share of the airspace over the United States is Class E, which provides room for the safe control and separation of aircraft during IFR operations.",
  "page": "6"
 },
 {
  "id": "s2-011",
  "section": 2,
  "sectionName": "Airspace",
  "question": "When a chart does not show a base for Class E airspace in an area, at what altitude does Class E begin there?",
  "choices": [
   "14,500 feet MSL",
   "10,000 feet MSL",
   "1,200 feet AGL",
   "700 feet AGL"
  ],
  "answer": 0,
  "explanation": "Sectional and other charts depict every Class E area whose base is below 14,500 feet MSL, so wherever no base is shown, Class E begins at 14,500 feet MSL.",
  "page": "6"
 },
 {
  "id": "s2-012",
  "section": 2,
  "sectionName": "Airspace",
  "question": "In most areas of the United States, where does the base of Class E airspace sit?",
  "choices": [
   "At 700 feet above ground level",
   "At the airport surface",
   "At 1,200 feet above ground level",
   "At 14,500 feet above mean sea level"
  ],
  "answer": 2,
  "explanation": "In most areas the Class E base is 1,200 feet AGL. In many other areas it is the surface or 700 feet AGL, and some Class E bases are charted at an MSL altitude instead of an AGL one.",
  "page": "6"
 },
 {
  "id": "s2-013",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Class E airspace typically extends upward to what limit?",
  "choices": [
   "Up to but not including 18,000 feet MSL",
   "Up to and including 18,000 feet MSL",
   "Up to but not including 14,500 feet MSL",
   "Up to and including 10,000 feet MSL"
  ],
  "answer": 0,
  "explanation": "Class E typically extends up to, but not including, 18,000 feet MSL, which is the lower limit of Class A airspace. Above FL 600, all airspace becomes Class E again.",
  "page": "6"
 },
 {
  "id": "s2-014",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Federal Airways, drawn as blue lines on sectional charts, span which altitudes?",
  "choices": [
   "From 1,200 feet AGL upward to but not including 14,500 feet MSL",
   "From the surface up to and including 18,000 feet MSL",
   "From 700 feet AGL up to and including flight level 600",
   "From 1,200 feet AGL up to but not including 18,000 feet MSL"
  ],
  "answer": 3,
  "explanation": "Federal Airways appear as blue lines on sectional charts, are usually found within Class E airspace, and run from 1,200 feet AGL up to, but not including, 18,000 feet MSL.",
  "page": "6"
 },
 {
  "id": "s2-015",
  "section": 2,
  "sectionName": "Airspace",
  "question": "In which class of controlled airspace can a remote pilot usually operate without ATC authorization?",
  "choices": [
   "Class B",
   "Class E",
   "Class C",
   "Class D"
  ],
  "answer": 1,
  "explanation": "In most cases a remote pilot does not need ATC authorization to operate in Class E airspace. Class B, C, and D each require authorization before the flight.",
  "page": "6"
 },
 {
  "id": "s2-016",
  "section": 2,
  "sectionName": "Airspace",
  "question": "What is Class G airspace?",
  "choices": [
   "Airspace that has not been designated Class A, B, C, D, or E",
   "Controlled airspace whose base begins at 1,200 feet AGL",
   "Special use airspace that surrounds active military airfields",
   "Any airspace lying beneath a shelf of Class B airspace"
  ],
  "answer": 0,
  "explanation": "Class G is uncontrolled airspace, the portion never designated Class A through E. It extends from the surface to the base of the overlying Class E airspace, and a remote pilot needs no ATC authorization to operate in it.",
  "page": "6"
 },
 {
  "id": "s2-017",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Why are prohibited areas established?",
  "choices": [
   "To separate military training flights from IFR traffic",
   "To warn pilots of hazardous activity over coastal waters",
   "For security or other reasons tied to national welfare",
   "To contain a high volume of civilian pilot training"
  ],
  "answer": 2,
  "explanation": "Prohibited areas ban all flight within their boundaries for security or other reasons associated with the national welfare. They are published in the Federal Register, charted as a 'P' followed by a number such as P-40, and include places like Camp David and the National Mall in Washington, D.C.",
  "page": "7"
 },
 {
  "id": "s2-018",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Which hazards are typical of a restricted area?",
  "choices": [
   "Heavy student pilot training and glider towing operations",
   "Artillery firing, aerial gunnery, or guided missiles",
   "Parachute jumping and banner towing demonstrations",
   "Low-level crop dusting and powerline patrol flights"
  ],
  "answer": 1,
  "explanation": "Restricted areas hold unusual, often invisible hazards to aircraft such as artillery firing, aerial gunnery, and guided missiles. Flight is not wholly prohibited, but entering without authorization from the using or controlling agency can be extremely hazardous. They are charted with an 'R' followed by a number, such as R-4401.",
  "page": "7"
 },
 {
  "id": "s2-019",
  "section": 2,
  "sectionName": "Airspace",
  "question": "When a restricted area is not active and has been released to the FAA, how does ATC handle aircraft in that airspace?",
  "choices": [
   "It allows operations there without a specific clearance",
   "It issues a clearance that steers aircraft around the airspace",
   "It requires a written waiver from the using agency first",
   "It closes the airspace until the military reactivates it"
  ],
  "answer": 0,
  "explanation": "If a restricted area is inactive and has been released to the FAA, ATC lets aircraft operate in it without issuing a specific clearance. If the area is active and has not been released, ATC instead issues a clearance that keeps the aircraft out of it.",
  "page": "8"
 },
 {
  "id": "s2-020",
  "section": 2,
  "sectionName": "Airspace",
  "question": "How does a warning area differ from a restricted area?",
  "choices": [
   "The activities inside it pose no hazard to nonparticipating aircraft",
   "It must lie entirely over international rather than domestic waters",
   "It is depicted only on IFR en route charts, never on sectionals",
   "The U.S. government lacks sole jurisdiction over the airspace"
  ],
  "answer": 3,
  "explanation": "Warning areas resemble restricted areas, but the United States does not have sole jurisdiction over the airspace. A warning area begins 3 NM outward from the coast, may lie over domestic or international waters or both, contains activity that may be hazardous to nonparticipating aircraft, and is charted with a 'W' followed by a number.",
  "page": "8"
 },
 {
  "id": "s2-021",
  "section": 2,
  "sectionName": "Airspace",
  "question": "What is the purpose of a military operations area (MOA)?",
  "choices": [
   "Prohibiting all civilian flight near military installations",
   "Warning pilots of artillery fire and guided missile tests",
   "Separating military training activities from IFR traffic",
   "Providing radar service to participating VFR aircraft"
  ],
  "answer": 2,
  "explanation": "An MOA has defined vertical and lateral limits and exists to separate certain military training activities from IFR traffic. Nonparticipating IFR flights may be cleared through an active MOA only when ATC can provide IFR separation; otherwise ATC reroutes or restricts them. MOAs carry names, such as Camden Ridge MOA, rather than numbers.",
  "page": "8"
 },
 {
  "id": "s2-022",
  "section": 2,
  "sectionName": "Airspace",
  "question": "What does an alert area, charted as an 'A' followed by a number, tell a pilot?",
  "choices": [
   "It may contain heavy pilot training or unusual aerial activity",
   "Flight in the area is prohibited for national security reasons",
   "Artillery firing and guided missile activity occur in the area",
   "Entry requires clearance from the controlling military agency"
  ],
  "answer": 0,
  "explanation": "Alert areas flag airspace that may contain a high volume of pilot training or an unusual type of aerial activity. All activity there must follow regulations without waiver, and participating pilots and pilots transiting the area are equally responsible for collision avoidance.",
  "page": "9"
 },
 {
  "id": "s2-023",
  "section": 2,
  "sectionName": "Airspace",
  "question": "What sets a controlled firing area (CFA) apart from other special use airspace?",
  "choices": [
   "It permanently prohibits all flight from the surface to 10,000 feet MSL",
   "Its activities stop when a lookout spots an approaching aircraft",
   "It is charted with a 'C' followed by an identifying number",
   "Its boundaries appear on every sectional chart"
  ],
  "answer": 1,
  "explanation": "CFA activities are suspended whenever a spotter aircraft, radar, or ground lookout position indicates an aircraft might be approaching the area. Because a nonparticipating aircraft never has to change its flight path, CFAs are not charted.",
  "page": "9"
 },
 {
  "id": "s2-024",
  "section": 2,
  "sectionName": "Airspace",
  "question": "A military training route labeled with four number characters, such as IR1206, indicates what?",
  "choices": [
   "No segment of the route is above 1,500 feet AGL",
   "The entire route lies above 10,000 feet MSL",
   "The route is flown only in IFR weather conditions",
   "At least one route segment exceeds 1,500 feet AGL"
  ],
  "answer": 0,
  "explanation": "MTRs with no segment above 1,500 feet AGL are identified by four number characters (IR1206, VR1207), while routes with one or more segments above 1,500 feet AGL use three (IR206, VR207). These routes are usually established below 10,000 feet MSL for operations at speeds in excess of 250 knots.",
  "page": "10"
 },
 {
  "id": "s2-025",
  "section": 2,
  "sectionName": "Airspace",
  "question": "How is a temporary flight restriction (TFR) put into effect?",
  "choices": [
   "Through a change published on the next sectional chart revision",
   "Through an entry added to the Chart Supplement U.S.",
   "Through an FDC NOTAM that begins with 'FLIGHT RESTRICTIONS'",
   "Through a broadcast on the local airport advisory frequency"
  ],
  "answer": 2,
  "explanation": "A TFR is designated by a flight data center (FDC) NOTAM. The notice opens with the phrase 'FLIGHT RESTRICTIONS' and then gives the location, effective time period, the affected area in statute miles, and the altitudes involved. Checking NOTAMs for TFRs is part of flight planning.",
  "page": "10"
 },
 {
  "id": "s2-026",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Which situation is a stated reason for establishing a TFR?",
  "choices": [
   "Reserving arrival airspace for scheduled airline traffic",
   "Reducing aircraft noise over residential neighborhoods",
   "Marking the location of permanent obstructions near airports",
   "Providing a safe environment for disaster relief aircraft"
  ],
  "answer": 3,
  "explanation": "TFRs are established to protect people and property from an existing or imminent hazard, give disaster relief aircraft a safe environment, prevent congestion of sightseeing aircraft over an incident drawing public interest, protect declared national disasters in Hawaii, protect the President and other public figures, and support space agency operations. Pilots can check for TFRs at www.tfr.faa.gov.",
  "page": "11"
 },
 {
  "id": "s2-027",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Where are parachute jump aircraft operations published?",
  "choices": [
   "In the Chart Supplement U.S.",
   "In the Federal Register",
   "In the Aeronautical Information Manual",
   "In flight data center NOTAMs"
  ],
  "answer": 0,
  "explanation": "Parachute jump aircraft operations are published in the Chart Supplement U.S., formerly known as the Airport/Facility Directory. Sites that are used frequently are also depicted on sectional charts.",
  "page": "11"
 },
 {
  "id": "s2-028",
  "section": 2,
  "sectionName": "Airspace",
  "question": "What are published VFR routes used for?",
  "choices": [
   "Navigating directly between VOR stations above 18,000 feet MSL",
   "Transitioning around, under, or through complex airspace",
   "Practicing instrument approach procedures in visual conditions",
   "Crossing restricted areas without agency authorization"
  ],
  "answer": 1,
  "explanation": "Published VFR routes carry names like VFR flyway, VFR corridor, Class B airspace VFR transition route, and terminal area VFR route, and they help pilots transition around, under, or through complex airspace. They are generally found on VFR terminal area planning charts.",
  "page": "11"
 },
 {
  "id": "s2-029",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Within a terminal radar service area (TRSA), what classification does the primary airport's airspace receive?",
  "choices": [
   "Class B",
   "Class C",
   "Class D",
   "Class G"
  ],
  "answer": 2,
  "explanation": "The primary airport or airports within a TRSA become Class D airspace, charted with a blue segmented line, while the rest of the TRSA overlies other controlled airspace, normally Class E beginning at 700 or 1,200 feet. TRSA radar services separate IFR traffic from participating VFR aircraft, and participation is voluntary.",
  "page": "11"
 },
 {
  "id": "s2-030",
  "section": 2,
  "sectionName": "Airspace",
  "question": "What is the primary purpose of the air traffic control system?",
  "choices": [
   "Preventing collisions and expediting the flow of air traffic",
   "Enforcing pilot certification and aircraft maintenance rules",
   "Collecting weather observations for the National Airspace System",
   "Assigning cruising altitudes to every aircraft in flight"
  ],
  "answer": 0,
  "explanation": "The ATC system exists primarily to prevent collisions between aircraft operating in the system and to organize and expedite the flow of traffic. Additional services are provided as traffic volume, frequency congestion, radar quality, and controller workload permit, and controllers must provide them when the work situation allows.",
  "page": "12"
 },
 {
  "id": "s2-031",
  "section": 2,
  "sectionName": "Airspace",
  "question": "What kind of information do Notices to Airmen (NOTAMs) carry?",
  "choices": [
   "Permanent airspace boundary changes republished every 56 days",
   "Routine terminal area weather forecasts issued twice daily",
   "Long-range planning data for future airport construction",
   "Time-critical information too new or short-lived for charts"
  ],
  "answer": 3,
  "explanation": "NOTAMs carry time-critical aeronautical information that is either temporary or was not known far enough in advance to publish on charts or in other operational publications. Reasons for issuing them include air shows, parachute jumps, kite flying, rocket launches, flights by heads of state, inoperable lights on tall obstructions, temporary obstacles near airfields, and bird flocks (a BIRDTAM).",
  "page": "13"
 },
 {
  "id": "s2-032",
  "section": 2,
  "sectionName": "Airspace",
  "question": "Where can a pilot get access to current NOTAM information online?",
  "choices": [
   "The Federal Register",
   "PilotWeb",
   "The Chart Supplement U.S.",
   "The Aeronautical Chart User's Guide"
  ],
  "answer": 1,
  "explanation": "PilotWeb provides online access to current NOTAM information, and NOTAMs are also available in printed form by subscription from the Superintendent of Documents. Various websites, such as www.fltplan.com and AOPA's NOTAM page, offer local airport NOTAMs and TFR updates after a free registration.",
  "page": "13"
 },
 {
  "id": "s3-001",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "When can a SPECI weather report be issued?",
  "choices": [
   "Only at the top of each hour",
   "At any time between routine METAR reports",
   "Only when the previous METAR is more than six hours old",
   "Only during daylight observing hours"
  ],
  "answer": 1,
  "explanation": "A SPECI is a special METAR that can be issued at any time between the regularly scheduled routine reports. It updates the METAR for rapidly changing weather conditions, aircraft mishaps, or other critical information.",
  "page": "15"
 },
 {
  "id": "s3-002",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "ICAO station identifiers for weather reporting stations in Alaska always begin with which letters?",
  "choices": [
   "PH",
   "KA",
   "PA",
   "AK"
  ],
  "answer": 2,
  "explanation": "In the 48 contiguous states a three-letter identifier is preceded by the letter K, but Alaska identifiers always begin with PA and Hawaii identifiers always begin with PH. The first two letters outside the contiguous states indicate the region, country, or state.",
  "page": "16"
 },
 {
  "id": "s3-003",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "How should the date and time group '161753Z' in a METAR be read?",
  "choices": [
   "The 16th day of the month at 1753 UTC",
   "The 16th day of the month at 1753 local station time",
   "June 17th at 5:30 p.m. UTC",
   "The 16th hour of the day at 17 minutes 53 seconds"
  ],
  "answer": 0,
  "explanation": "The first two digits of the six-digit group are the date and the last four are the time of the report. The Z appended to the group means the time is coordinated universal time (Zulu), not local time.",
  "page": "16"
 },
 {
  "id": "s3-004",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "What does the modifier 'COR' indicate when it appears in a METAR?",
  "choices": [
   "The report came from an automated station without an observer",
   "The station's reporting equipment needs corrective maintenance",
   "The observation was confirmed by a second weather observer",
   "The report corrects an error in an earlier transmitted report"
  ],
  "answer": 3,
  "explanation": "The modifier COR identifies a corrected report sent out to replace an earlier report that contained an error. A report from an automated source uses the modifier AUTO instead.",
  "page": "16"
 },
 {
  "id": "s3-005",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "What conditions does the METAR wind group '14021G26KT' describe?",
  "choices": [
   "Wind from 210 degrees true at 14 knots, gusting to 26 knots",
   "Wind from 140 degrees true at 21 knots, gusting to 26 knots",
   "Wind from 140 degrees true at 26 knots, gusting to 21 knots",
   "Wind variable between 140 and 210 degrees at 26 knots"
  ],
  "answer": 1,
  "explanation": "The first three digits give the direction the true wind is blowing from in tens of degrees, and the next two digits give the speed in knots. The letter G follows the wind speed when gusting, and the number after it is the peak gust recorded.",
  "page": "16"
 },
 {
  "id": "s3-006",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "How should the METAR entry 'R17L/1400FT' be read?",
  "choices": [
   "The visual range on runway 17 left is 1,400 feet",
   "The visual range on runway 14 left is 1,700 feet",
   "Runway 17 left has 1,400 feet of usable landing distance",
   "The visual range on runway 17 left is 1,400 meters"
  ],
  "answer": 0,
  "explanation": "Runway visual range (RVR) is the distance a pilot can see down the runway from a moving aircraft. It is coded with an R, the runway number, a slant, and the visual range in feet, so R17L/1400FT means a visual range of 1,400 feet on runway 17 left.",
  "page": "16"
 },
 {
  "id": "s3-007",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "In METAR weather coding, the notation 'VC' means a weather phenomenon is occurring at what distance from the airport?",
  "choices": [
   "Within one mile of the field",
   "Between one and five miles",
   "Between five and ten miles",
   "Between ten and twenty miles"
  ],
  "answer": 2,
  "explanation": "VC is the proximity qualifier, indicating a specific weather phenomenon is in the vicinity of the airport, which means five to ten miles from the field.",
  "page": "16"
 },
 {
  "id": "s3-008",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "In the METAR weather group '+TSRA', what does the '+' symbol indicate?",
  "choices": [
   "The phenomenon is increasing in intensity",
   "The precipitation intensity is heavy",
   "Additional weather groups follow this one",
   "The phenomenon is in the vicinity of the airport"
  ],
  "answer": 1,
  "explanation": "The intensity qualifier ahead of a weather phenomenon is a minus sign for light, no symbol for moderate, and a plus sign for heavy. So +TSRA reports a thunderstorm with heavy rain.",
  "page": "16"
 },
 {
  "id": "s3-009",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "In the METAR sky condition 'BKN008', at what height is the broken cloud layer?",
  "choices": [
   "8,000 feet AGL",
   "80 feet AGL",
   "800 feet MSL",
   "800 feet AGL"
  ],
  "answer": 3,
  "explanation": "Cloud base heights in the sky condition group are reported as a three-digit number in hundreds of feet above ground level, so 008 means a base at 800 feet AGL.",
  "page": "17"
 },
 {
  "id": "s3-010",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "Automated weather stations do not detect or report clouds above what height?",
  "choices": [
   "10,000 feet",
   "12,000 feet",
   "15,000 feet",
   "18,000 feet"
  ],
  "answer": 1,
  "explanation": "An automated station cannot detect or report clouds above 12,000 feet, so a clear sky condition from an automated source only covers the sky below that height.",
  "page": "17"
 },
 {
  "id": "s3-011",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "In a METAR sky condition report, the amount of sky coverage is measured in what units?",
  "choices": [
   "Eighths of the sky from horizon to horizon",
   "Tenths of the sky directly overhead",
   "Percent of the visible sky",
   "Quarters of the sky by compass sector"
  ],
  "answer": 0,
  "explanation": "Sky coverage contractions such as broken or overcast are based on how many eighths of the sky, from horizon to horizon, are covered by clouds or obscuring phenomena.",
  "page": "17"
 },
 {
  "id": "s3-012",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "How does a METAR indicate an air temperature below 0 degrees Celsius?",
  "choices": [
   "The value is preceded by a minus sign",
   "The value is preceded by the letter M",
   "The value is followed by the letter B",
   "The value is converted to degrees Fahrenheit"
  ],
  "answer": 1,
  "explanation": "Temperature and dew point in a METAR are always given in degrees Celsius, and a value below 0 degrees C is preceded by the letter M to indicate minus.",
  "page": "17"
 },
 {
  "id": "s3-013",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "What value does the METAR group 'A2970' report?",
  "choices": [
   "A field elevation of 2,970 feet MSL",
   "An altimeter setting of 29.70 millibars",
   "An altimeter setting of 29.70 inches of mercury",
   "A pressure altitude of 2,970 feet"
  ],
  "answer": 2,
  "explanation": "The altimeter setting is a four-digit group preceded by the letter A and is reported in inches of mercury, so A2970 means 29.70 inches of mercury. Rapidly rising or falling pressure may also appear in the remarks as PRESRR or PRESFR.",
  "page": "17"
 },
 {
  "id": "s3-014",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "A terminal aerodrome forecast (TAF) describes expected weather for what area?",
  "choices": [
   "A five statute mile radius around an airport",
   "A ten statute mile radius around an airport",
   "The entire air traffic control sector",
   "A 3,000 square mile region around an airport"
  ],
  "answer": 0,
  "explanation": "A TAF is established for the five statute mile radius around an airport, usually a larger airport, and it uses the same descriptors and abbreviations as a METAR.",
  "page": "18"
 },
 {
  "id": "s3-015",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "How often are scheduled TAFs issued?",
  "choices": [
   "Four times a day, at 0000Z, 0600Z, 1200Z, and 1800Z",
   "Four times a day, at 0300Z, 0900Z, 1500Z, and 2100Z",
   "Twice a day, at 0600Z and 1800Z",
   "Once a day, at 1200Z"
  ],
  "answer": 0,
  "explanation": "Scheduled TAFs are issued four times per day at 0000Z, 0600Z, 1200Z, and 1800Z, and each one is valid for a 24 or 30 hour period.",
  "page": "18"
 },
 {
  "id": "s3-016",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "In a TAF, what does a forecast visibility coded as 'P6SM' mean?",
  "choices": [
   "Visibility of exactly six statute miles",
   "Visibility greater than six statute miles",
   "Visibility of less than six statute miles",
   "Visibility of six nautical miles or more"
  ],
  "answer": 1,
  "explanation": "TAF visibility is forecast in statute miles, in whole numbers or fractions. When the forecast visibility is greater than six miles, it is coded as P6SM.",
  "page": "19"
 },
 {
  "id": "s3-017",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "In a TAF change group, 'TEMPO' describes weather fluctuations expected to last how long?",
  "choices": [
   "Less than one hour",
   "More than one hour but less than two",
   "Between two and four hours",
   "Until the next scheduled TAF is issued"
  ],
  "answer": 0,
  "explanation": "TEMPO is used for temporary fluctuations of weather expected to last less than one hour. FM, by contrast, marks a rapid and significant change, usually happening within an hour.",
  "page": "19"
 },
 {
  "id": "s3-018",
  "section": 3,
  "sectionName": "Aviation Weather Sources",
  "question": "A convective SIGMET is issued for a severe thunderstorm when surface winds exceed what speed?",
  "choices": [
   "30 knots",
   "40 knots",
   "50 knots",
   "65 knots"
  ],
  "answer": 2,
  "explanation": "Convective SIGMETs are issued for severe thunderstorms with surface winds greater than 50 knots, hail at the surface of three-quarters of an inch or more in diameter, or tornadoes. They also cover embedded thunderstorms, lines of thunderstorms, and storms with heavy or greater precipitation affecting 40 percent or more of an area of at least 3,000 square miles.",
  "page": "19"
 },
 {
  "id": "s4-001",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "What does the term density altitude describe?",
  "choices": [
   "The altitude in the standard atmosphere matching a particular air density",
   "The altitude shown on an altimeter when it is set to 29.92 inches of mercury",
   "The true vertical distance between the aircraft and the terrain below it",
   "The height of the aircraft above mean sea level corrected for wind speed"
  ],
  "answer": 0,
  "explanation": "Density altitude is the altitude in the standard atmosphere that corresponds to a particular value of air density. It is the proper term for correlating aerodynamic performance in a nonstandard atmosphere: thin air means a high density altitude, dense air means a low density altitude.",
  "page": "21"
 },
 {
  "id": "s4-002",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "How does a high density altitude affect the performance of a small unmanned aircraft?",
  "choices": [
   "Performance improves because the thinner air produces less drag on the airframe",
   "Performance decreases because the air is thinner",
   "Performance is unchanged as long as the aircraft stays below 400 feet",
   "Performance improves in a climb but decreases in level flight"
  ],
  "answer": 1,
  "explanation": "Density altitude has a direct effect on aircraft performance. High density altitude means thin air, and as air density decreases, performance decreases. Denser air (a lower density altitude) improves performance.",
  "page": "21"
 },
 {
  "id": "s4-003",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "Which combination of conditions results in a high density altitude?",
  "choices": [
   "Low elevation, high atmospheric pressure, and low humidity",
   "High atmospheric pressure, low temperature, and dry air",
   "High elevation, high temperature, and high humidity",
   "Low elevation, low temperature, and low humidity"
  ],
  "answer": 2,
  "explanation": "High elevations, low atmospheric pressure, high temperatures, high humidity, or any combination of these produce a high density altitude and thus degraded performance. Lower elevations, high pressure, low temperatures, and low humidity indicate a low density altitude.",
  "page": "21"
 },
 {
  "id": "s4-004",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "At a constant pressure, what happens to air density as the temperature rises?",
  "choices": [
   "Density decreases, since it varies inversely with temperature",
   "Density increases in direct proportion to the temperature change",
   "Density stays the same, because only pressure changes affect it",
   "Density increases until the air is saturated, then it decreases"
  ],
  "answer": 0,
  "explanation": "Increasing the temperature of a substance decreases its density, so air density varies inversely with temperature when pressure is held constant. In the atmosphere both temperature and pressure fall with altitude, but the rapid pressure drop dominates, so density decreases as you climb.",
  "page": "21"
 },
 {
  "id": "s4-005",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "How does water vapor in the air affect density altitude?",
  "choices": [
   "Moist air is denser than dry air, so more moisture lowers the density altitude",
   "Water vapor has no measurable effect on air density at any temperature",
   "Moisture increases density near the surface but decreases it at altitude",
   "Moist air is less dense than dry air, so more moisture raises the density altitude"
  ],
  "answer": 3,
  "explanation": "Water vapor is lighter than air, so moist air is lighter than dry air. As the water content of the air increases, the air becomes less dense, which raises the density altitude and reduces performance. Humidity alone is not usually an essential factor in density altitude calculations, but it does contribute.",
  "page": "22"
 },
 {
  "id": "s4-006",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "What are the standard sea level pressure and temperature in the International Standard Atmosphere?",
  "choices": [
   "29.92 inches of mercury and 0 degrees Celsius",
   "29.92 inches of mercury and 15 degrees Celsius",
   "1,013.2 inches of mercury and 15 degrees Celsius",
   "30.92 inches of mercury and 59 degrees Celsius"
  ],
  "answer": 1,
  "explanation": "Standard sea level conditions are 29.92 inches of mercury and 59 degrees Fahrenheit (15 degrees Celsius). In millibars, standard sea level pressure is 1,013.2 mb, with 1 inch of mercury equal to about 34 mb; typical readings range from 950.0 to 1,040.0 mb.",
  "page": "22"
 },
 {
  "id": "s4-007",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "A weather station at 5,000 feet elevation measures a barometric pressure of 24.92 inches of mercury. What sea level pressure does it report?",
  "choices": [
   "24.92 inches of mercury, because barometric readings are always reported unadjusted",
   "19.92 inches of mercury, after subtracting about 1 inch for each 1,000 feet",
   "29.92 inches of mercury, after adding about 1 inch for each 1,000 feet",
   "34.92 inches of mercury, after adding about 2 inches for each 1,000 feet"
  ],
  "answer": 2,
  "explanation": "Every station converts its local barometric reading to a sea level pressure by adding approximately 1 inch of mercury for every 1,000 feet of elevation, giving all records and reports a common standard. A station at 5,000 feet reading 24.92 inches therefore reports 29.92 inches.",
  "page": "23"
 },
 {
  "id": "s4-008",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "What determines the intensity of the turbulence created by ground obstructions such as buildings or bluffs?",
  "choices": [
   "The size of the obstacle and the primary velocity of the wind",
   "The air temperature and the relative humidity around the obstacle",
   "The time of day and the direction of the prevailing wind",
   "The altitude of the aircraft and the local density altitude"
  ],
  "answer": 0,
  "explanation": "Obstructions on the ground, from hangars to mountains, bluffs, and canyons, break up the wind flow and create gusts that change rapidly in direction and speed. The intensity of that turbulence depends on the size of the obstacle and the primary velocity of the wind, and it can seriously hazard any aircraft.",
  "page": "23"
 },
 {
  "id": "s4-009",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "Why is the leeward (downwind) side of a mountain hazardous when the wind is strong?",
  "choices": [
   "Rising currents on that side can carry an aircraft well above its planned altitude",
   "Air flowing down that side turns turbulent and can push an aircraft into the slope",
   "The air on that side is unusually calm, which hides the strong winds blowing above the peak",
   "Temperatures on that side climb quickly and create a sudden rise in density altitude"
  ],
  "answer": 1,
  "explanation": "Wind flows smoothly up the windward side of a mountain, and the rising currents help carry an aircraft over the peak. On the leeward side the air follows the contour of the terrain downward and becomes increasingly turbulent, tending to push an aircraft into the mountainside. The stronger the wind, the greater the downward pressure and turbulence.",
  "page": "23"
 },
 {
  "id": "s4-010",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "Low-level wind shear is commonly associated with which weather conditions?",
  "choices": [
   "High pressure systems, clear skies, light surface winds, and stable air aloft",
   "Morning fog, heavy dew, thin overcast layers, and high relative humidity",
   "Passing frontal systems, thunderstorms, temperature inversions, and strong upper level winds",
   "Steady sea breezes, afternoon heating, scattered fair weather clouds, and haze"
  ],
  "answer": 2,
  "explanation": "Wind shear is a sudden, drastic change in wind speed or direction over a very small area. Low-level wind shear is commonly associated with passing frontal systems, thunderstorms, temperature inversions, and strong upper level winds greater than 25 knots, and it is especially hazardous because the aircraft is close to the ground.",
  "page": "23"
 },
 {
  "id": "s4-011",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "During flight, a headwind suddenly shifts to a tailwind. What is the effect on the aircraft?",
  "choices": [
   "Airspeed and performance both increase",
   "Airspeed increases while performance decreases",
   "Airspeed decreases while performance increases",
   "Airspeed and performance both decrease"
  ],
  "answer": 3,
  "explanation": "Wind shear can rapidly change aircraft performance and disrupt the normal flight attitude. A headwind changing to a tailwind causes a decrease in airspeed and performance, while a tailwind quickly changing to a headwind causes an increase in both. Either way the pilot must react immediately to keep control.",
  "page": "24"
 },
 {
  "id": "s4-012",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "How strong can the downdrafts in a typical microburst become?",
  "choices": [
   "Up to 1,000 feet per minute",
   "Up to 6,000 feet per minute",
   "Up to 2,500 feet per minute",
   "Up to 15,000 feet per minute"
  ],
  "answer": 1,
  "explanation": "A microburst, the most severe type of low-level wind shear, can produce downdrafts of up to 6,000 feet per minute and headwind losses of 30 to 90 knots. A typical microburst is 1 to 2 miles across, about 1,000 feet deep, and lasts roughly 5 to 15 minutes; often a ring of blowing dust is the only visible clue.",
  "page": "24"
 },
 {
  "id": "s4-013",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "What sequence of wind changes does a small unmanned aircraft encounter when it flies through a microburst?",
  "choices": [
   "A rapidly increasing tailwind, then an updraft, then a steady headwind",
   "A downdraft, then a crosswind from either side, then a strong updraft",
   "An increasing headwind, then downdrafts, then a rapidly increasing tailwind",
   "A steady updraft, then a period of calm air, then a slowly building headwind"
  ],
  "answer": 2,
  "explanation": "In an inadvertent microburst encounter, the aircraft first meets a performance-increasing headwind, then performance-decreasing downdrafts, then a rapidly increasing tailwind. That sequence can cause terrain impact or flight dangerously close to the ground, and on approach it can force the aircraft down short of the landing area.",
  "page": "24"
 },
 {
  "id": "s4-014",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "Which kind of air produces the greatest atmospheric instability?",
  "choices": [
   "Warm, moist air",
   "Cool, dry air",
   "Warm, dry air",
   "Cool, moist air"
  ],
  "answer": 0,
  "explanation": "The combination of moisture and temperature determines stability. Cool, dry air is very stable and resists vertical movement, giving generally clear weather. The greatest instability occurs in warm, moist air, as in tropical regions in summer, where thunderstorms appear almost daily. Instability leads to turbulence, extensive vertical clouds, and severe weather.",
  "page": "24"
 },
 {
  "id": "s4-015",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "What defines a temperature inversion?",
  "choices": [
   "Air temperature decreases faster than normal as altitude increases",
   "Air temperature increases as altitude increases",
   "Atmospheric pressure increases as altitude increases",
   "The surface temperature drops until it equals the dew point"
  ],
  "answer": 1,
  "explanation": "Normally air cools as it rises, but in an inversion the temperature increases with altitude up to the top of the inversion layer. Inversion layers are commonly shallow layers of smooth, stable air close to the ground, and the warm air on top acts as a lid that traps weather and pollutants below; with high humidity, clouds, fog, haze, or smoke can reduce visibility in the layer.",
  "page": "24"
 },
 {
  "id": "s4-016",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "When do surface-based temperature inversions typically form?",
  "choices": [
   "On hot, humid afternoons when convective activity is strongest",
   "During windy, overcast days when the lower air layers mix continuously",
   "Immediately after a cold front passes and pressure begins rising",
   "On clear, cool nights when the ground cools the air just above it"
  ],
  "answer": 3,
  "explanation": "Surface-based inversions occur on clear, cool nights: the ground cools, and the air within a few hundred feet of the surface becomes cooler than the air above it. Frontal inversions form when warm air spreads over a layer of cooler air, or cooler air is forced under warmer air.",
  "page": "24"
 },
 {
  "id": "s4-017",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "What weather is likely when air reaches saturation while the temperature and dew point are close together?",
  "choices": [
   "Gusty surface winds and rings of blowing dust",
   "Fog, low clouds, and precipitation",
   "Clear skies with strong thermal activity",
   "High, thin clouds and improving visibility"
  ],
  "answer": 1,
  "explanation": "The dew point is the temperature at which air can hold no more moisture; when the air cools to it, moisture condenses out as fog, dew, frost, clouds, rain, or snow. If saturation is reached while temperature and dew point are close together, fog, low clouds, and precipitation are highly likely. Air can saturate by moving over a cold surface, by mixing of cold and warm air, by nighttime cooling, or by being lifted.",
  "page": "25"
 },
 {
  "id": "s4-018",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "Why must frost be removed from a small unmanned aircraft before flight?",
  "choices": [
   "It disrupts airflow over the wing and can sharply reduce lift",
   "It adds enough weight to push the aircraft over its takeoff limit",
   "It can crack propeller blades once they reach full rotation speed",
   "It interferes with the compass and degrades navigation accuracy"
  ],
  "answer": 0,
  "explanation": "Frost forms when surface temperatures drop below both the dew point and freezing. Unlike dew, frost is a definite flight safety hazard: it disrupts the flow of air over the wing, can drastically reduce lift, and increases drag, which together can prevent a successful takeoff. The aircraft must be thoroughly cleaned and free of frost before flight.",
  "page": "25"
 },
 {
  "id": "s4-019",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "What do standing lenticular altocumulus clouds indicate to a pilot?",
  "choices": [
   "Calm, stable air, since the clouds show almost no movement",
   "An approaching warm front with steady, widespread precipitation",
   "Very strong turbulence, even though the clouds look smooth and polished",
   "Rapidly building thunderstorms forming along a squall line"
  ],
  "answer": 2,
  "explanation": "Standing lenticular altocumulus clouds form on the crests of waves created by barriers in the wind flow. Although the clouds show little movement and have smooth, polished edges, the wind blowing through them can be very strong. Their presence is a good indication of very strong turbulence, and the area should be avoided.",
  "page": "25"
 },
 {
  "id": "s4-020",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "Which weather characteristics are typical of a stable air mass?",
  "choices": [
   "Cumuliform clouds, showery precipitation, and rough air",
   "Stratiform clouds, continuous precipitation, and smooth air",
   "Cumuliform clouds, continuous precipitation, and good visibility",
   "Stratiform clouds, showery precipitation, and turbulent air"
  ],
  "answer": 1,
  "explanation": "Stable air brings stratiform clouds and fog, continuous precipitation, smooth air, and fair to poor visibility in haze and smoke. Unstable air brings the opposite: cumuliform clouds, showery precipitation, rough air, and good visibility except in blowing obstructions.",
  "page": "26"
 },
 {
  "id": "s4-021",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "In meteorology, what is a front?",
  "choices": [
   "The leading edge of the downdraft spreading out beneath a thunderstorm",
   "A stationary band of fog that forms along a coastline overnight",
   "The center of a low pressure system where surface winds converge",
   "The zone between two air masses that have different properties"
  ],
  "answer": 3,
  "explanation": "As air masses move out of their source regions they meet air masses with different properties, and the zone between them is a frontal zone or front. Across a front, temperature, humidity, and wind often change rapidly over short distances.",
  "page": "26"
 },
 {
  "id": "s4-022",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "When planning flight near mountains, what wind speed across the mountain barrier dictates caution?",
  "choices": [
   "In excess of 25 knots",
   "In excess of 40 knots",
   "In excess of 15 knots",
   "In excess of 60 knots"
  ],
  "answer": 1,
  "explanation": "Wind at mountain top level in excess of 25 knots suggests some turbulence, and wind in excess of 40 knots across a mountain barrier dictates caution. Standing lenticular or rotor clouds suggest a mountain wave: expect turbulence many miles to the lee of the mountains and relatively smooth flight on the windward side.",
  "page": "26"
 },
 {
  "id": "s4-023",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "Which two conditions must both be present for structural icing to form on an aircraft in flight?",
  "choices": [
   "Relative humidity above 80 percent, and an outside air temperature below 10 °C",
   "Falling barometric pressure, and a dew point within a few degrees of the air temperature",
   "Flight through visible water such as rain or cloud droplets, and surfaces at 0 °C or colder",
   "Freezing temperatures at the surface, and winds across the route above 25 knots"
  ],
  "answer": 2,
  "explanation": "Structural icing in flight requires two conditions: the aircraft must be flying through visible water such as rain or cloud droplets, and the temperature where the moisture strikes the aircraft must be 0 °C or colder. Aerodynamic cooling can chill an airfoil to 0 °C even when the ambient air is a few degrees warmer.",
  "page": "26"
 },
 {
  "id": "s4-024",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "What is the key feature of the cumulus stage of a thunderstorm?",
  "choices": [
   "An updraft extending from very near the surface to the cloud top",
   "A cold downdraft that produces strong, gusty winds at the surface",
   "Steady precipitation falling from the base of the cloud",
   "Frequent lightning strikes and the first appearance of hail"
  ],
  "answer": 0,
  "explanation": "Every thunderstorm begins as a cumulus cloud, and the key feature of the cumulus stage is an updraft reaching from near the surface to the cloud top. The cloud can grow at more than 3,000 feet per minute, so operating a small UA near rapidly building cumulus clouds is inadvisable; the updraft also carries liquid water above the freezing level, creating an icing hazard.",
  "page": "26"
 },
 {
  "id": "s4-025",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "What signals that a thunderstorm cell has entered the mature stage?",
  "choices": [
   "The cloud top stops rising and spreads into a flat anvil shape",
   "Precipitation begins to fall from the base of the cloud",
   "Surface winds calm down while the barometric pressure falls sharply",
   "Lightning first becomes visible in the upper part of the cloud"
  ],
  "answer": 1,
  "explanation": "Precipitation beginning to fall from the cloud base signals that a downdraft has developed and the cell has entered the mature stage. Downdraft speeds may exceed 2,500 feet per minute while updrafts may exceed 6,000 feet per minute, and the down-rushing air spreads out as a plow wind whose leading edge is the first gust. All thunderstorm hazards reach their greatest intensity during the mature stage.",
  "page": "27"
 },
 {
  "id": "s4-026",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "What characterizes the dissipating stage of a thunderstorm cell?",
  "choices": [
   "Updrafts strengthen while the cloud continues building upward",
   "Updrafts and downdrafts reach a balance that keeps the cell steady",
   "Downdrafts dominate and the storm dies rapidly",
   "Surface winds reach their peak while heavy hail begins to fall"
  ],
  "answer": 2,
  "explanation": "Downdrafts characterize the dissipating stage, and the storm dies rapidly. The stage is complete when the rain has ended and the downdrafts have abated; once every cell has finished dissipating, only harmless cloud remnants remain. A thunderstorm may be a cluster of cells in different stages, and the transitions between stages are too subtle to detect visually.",
  "page": "27"
 },
 {
  "id": "s4-027",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "For aviation purposes, what is a ceiling?",
  "choices": [
   "The highest altitude at which any cloud layer is reported by a weather station",
   "The lowest cloud layer reported as scattered or few at the reporting station",
   "The greatest altitude at which an aircraft can maintain level flight on a given day",
   "The lowest broken or overcast cloud layer, or the vertical visibility into an obscuration"
  ],
  "answer": 3,
  "explanation": "A ceiling is the lowest layer of clouds reported as broken or overcast, or the vertical visibility into an obscuration such as fog or haze. Broken means five-eighths to seven-eighths of the sky is covered; overcast means the entire sky is covered. Current ceilings are reported in the METAR and by automated weather stations.",
  "page": "28"
 },
 {
  "id": "s4-028",
  "section": 4,
  "sectionName": "Weather and Performance",
  "question": "How is visibility defined in aviation weather reporting?",
  "choices": [
   "The farthest horizontal distance at which prominent objects can be seen by eye",
   "The farthest slant range at which runway lights can be identified through binoculars",
   "The vertical distance between the surface and the lowest reported cloud layer",
   "The average distance a pilot can see in every direction during daylight hours"
  ],
  "answer": 0,
  "explanation": "Visibility is the greatest horizontal distance at which prominent objects can be seen with the naked eye. It is closely related to cloud cover and reported ceilings, appears in the METAR and other aviation weather reports and automated systems, and forecast visibility is available during a preflight weather briefing.",
  "page": "28"
 },
 {
  "id": "s5-001",
  "section": 5,
  "sectionName": "Loading",
  "question": "A small unmanned aircraft is loaded to its manufacturer's maximum gross takeoff weight. Under which conditions might the remote PIC still need to reduce the load before flight?",
  "choices": [
   "High elevations, high air temperatures, and high humidity",
   "Low elevations, low air temperatures, and low humidity",
   "High barometric pressure, cool air, and calm surface winds",
   "Low humidity, dense air, and an unobstructed launch area"
  ],
  "answer": 0,
  "explanation": "An aircraft may not always take off safely at its maximum gross weight under all conditions. High elevations, high air temperatures, and high humidity create high density altitudes that degrade takeoff and climb performance, and they may require reducing weight before flight. Launch area length, surface, slope, wind, and obstacles can force the same reduction.",
  "page": "29"
 },
 {
  "id": "s5-002",
  "section": 5,
  "sectionName": "Loading",
  "question": "How does fuel burn typically affect an aircraft as a flight progresses?",
  "choices": [
   "The aircraft gets lighter and performance improves, but balance can be adversely affected",
   "The aircraft gets lighter, and both performance and balance steadily improve as tanks empty",
   "Performance degrades as fuel burns because the lighter aircraft generates less lift",
   "Weight loss from fuel burn has no measurable effect on performance or balance"
  ],
  "answer": 0,
  "explanation": "Fuel burn is the most common in-flight weight change. As fuel is used the aircraft becomes lighter and performance improves, but the shift in weight distribution can hurt balance. In small UA operations the same kind of change happens when expendable items, such as a jettisonable load, are used.",
  "page": "29"
 },
 {
  "id": "s5-003",
  "section": 5,
  "sectionName": "Loading",
  "question": "Which statement about a small unmanned aircraft's center of gravity (CG) is true?",
  "choices": [
   "It shifts as variable load items are moved or expended",
   "It is a fixed point marked on the aircraft by the manufacturer",
   "It stays in one place as long as the total weight is unchanged",
   "It always coincides with the center of pressure in level flight"
  ],
  "answer": 0,
  "explanation": "The CG is not a fixed point marked on the aircraft. Its location depends on how the aircraft's weight is distributed, so shifting or expending variable load items can move it. The remote PIC should determine how the CG will shift and what effect that shift has on the aircraft.",
  "page": "29"
 },
 {
  "id": "s5-004",
  "section": 5,
  "sectionName": "Loading",
  "question": "After loading, a remote PIC finds the aircraft's CG falls outside the allowable limits. What must be done?",
  "choices": [
   "Relocate or shed some weight before attempting flight",
   "Restrict the flight to bank angles of less than 30 degrees",
   "Proceed with the flight if total weight is still under the maximum",
   "Fly a brief low-altitude test hop to confirm safe handling"
  ],
  "answer": 0,
  "explanation": "If the CG is not within the allowable limits after loading, or will not stay within them for safe flight, weight must be relocated or shed before flight is attempted. Adverse balance affects flight characteristics much like excess weight does, so flying anyway is not an option.",
  "page": "29"
 },
 {
  "id": "s5-005",
  "section": 5,
  "sectionName": "Loading",
  "question": "When an aircraft's center of gravity is located forward of its center of pressure, what is the natural tendency of the aircraft?",
  "choices": [
   "To pitch nose down",
   "To pitch nose up",
   "To roll toward the heavier wing",
   "To yaw away from the relative wind"
  ],
  "answer": 0,
  "explanation": "Weight acts at the CG and lift acts at the center of pressure (CP). With the CG forward of the CP the aircraft tends to pitch nose down; with the CP forward of the CG a nose-up pitching moment is created. Designers fix the aft CG limit forward of the CP to retain flight equilibrium.",
  "page": "29"
 },
 {
  "id": "s5-006",
  "section": 5,
  "sectionName": "Loading",
  "question": "In stabilized level flight with no vertical acceleration, how do lift and weight compare?",
  "choices": [
   "Lift equals weight, and the aircraft is in equilibrium",
   "Lift slightly exceeds weight in order to hold altitude",
   "Lift is slightly less than weight, with thrust making up the difference",
   "Lift and weight vary independently and only briefly match"
  ],
  "answer": 0,
  "explanation": "In stabilized level flight the lift force equals the weight force, putting the aircraft in equilibrium so it neither accelerates upward nor downward. If lift becomes less than weight, vertical speed decreases; if lift exceeds weight, vertical speed increases.",
  "page": "30"
 },
 {
  "id": "s5-007",
  "section": 5,
  "sectionName": "Loading",
  "question": "Which best describes stability in an aircraft?",
  "choices": [
   "The inherent quality to correct for disturbances and return to the original flight path",
   "The quality that lets the aircraft be maneuvered easily and withstand maneuvering stress",
   "The quality of the aircraft's response to the pilot's control inputs while maneuvering",
   "The margin between the stalling speed and the maximum structural cruising speed"
  ],
  "answer": 0,
  "explanation": "Stability is the inherent quality of an aircraft to correct for conditions that disturb its equilibrium and to return to or continue on its original flight path. It is primarily a design characteristic. Ease of maneuvering describes maneuverability, and response to pilot inputs describes controllability.",
  "page": "30"
 },
 {
  "id": "s5-008",
  "section": 5,
  "sectionName": "Loading",
  "question": "Which term describes an aircraft's capability to respond to the pilot's control inputs, regardless of its stability characteristics?",
  "choices": [
   "Controllability",
   "Maneuverability",
   "Stability",
   "Equilibrium"
  ],
  "answer": 0,
  "explanation": "Controllability is the capability of an aircraft to respond to the pilot's control, especially regarding flight path and attitude, and it applies regardless of the aircraft's stability characteristics. Maneuverability is instead the design quality that lets the aircraft be maneuvered easily and withstand the stresses of maneuvers.",
  "page": "30"
 },
 {
  "id": "s5-009",
  "section": 5,
  "sectionName": "Loading",
  "question": "A load factor of 3 Gs means the total load on the aircraft's structure is equal to what?",
  "choices": [
   "Three times the aircraft's weight",
   "One-third of the aircraft's weight",
   "Three times the maximum lift the wings can generate",
   "Three times the aircraft's maximum certificated load"
  ],
  "answer": 0,
  "explanation": "Load factor is the proportion between lift and weight, measured in Gs. A load factor of 3 means the total load on the aircraft's structure is three times its weight, and any force that deflects the aircraft's flight from a straight line produces this kind of stress on the structure.",
  "page": "30"
 },
 {
  "id": "s5-010",
  "section": 5,
  "sectionName": "Loading",
  "question": "Besides the risk of imposing a dangerous overload on the structure, why is knowledge of load factors essential for pilots?",
  "choices": [
   "An increased load factor raises the stalling speed, so stalls can occur at seemingly safe airspeeds",
   "An increased load factor lowers the stalling speed, hiding an approaching stall until touchdown",
   "Load factors reduce engine power output in direct proportion to the Gs on the airframe",
   "Load factors reverse the control response whenever they exceed the aircraft's structural limit"
  ],
  "answer": 0,
  "explanation": "Load factors matter for two reasons: a pilot can impose a dangerous overload on the aircraft's structure, and an increased load factor increases the stalling speed, making stalls possible at flight speeds that seem safe.",
  "page": "30"
 },
 {
  "id": "s5-011",
  "section": 5,
  "sectionName": "Loading",
  "question": "During a coordinated, constant-altitude turn, the load factor is the result of which two forces?",
  "choices": [
   "Centrifugal force and weight",
   "Centrifugal force and drag",
   "Lift and thrust",
   "Thrust and weight"
  ],
  "answer": 0,
  "explanation": "At a constant altitude, the load factor in a coordinated turn in any aircraft is the result of two forces: centrifugal force and weight. The wing must produce enough lift to match the resulting load factor if altitude is to be maintained.",
  "page": "31"
 },
 {
  "id": "s5-012",
  "section": 5,
  "sectionName": "Loading",
  "question": "At a constant bank angle and altitude, what happens to the rate of turn as airspeed increases?",
  "choices": [
   "It decreases",
   "It increases",
   "It stays the same",
   "It depends on aircraft weight, not airspeed"
  ],
  "answer": 0,
  "explanation": "For any given bank angle, the rate of turn varies with airspeed: the higher the speed, the slower the rate of turn. This compensates for the added centrifugal force, which is why the load factor stays the same for a given bank angle regardless of speed.",
  "page": "31"
 },
 {
  "id": "s5-013",
  "section": 5,
  "sectionName": "Loading",
  "question": "What is the load factor on any aircraft in a coordinated, level turn at a 60-degree bank?",
  "choices": [
   "2 Gs",
   "1.5 Gs",
   "3 Gs",
   "4 Gs"
  ],
  "answer": 0,
  "explanation": "In a coordinated level turn, the load factor at a 60-degree bank is 2 Gs for any aircraft. Load factor rises at a terrific rate once the bank exceeds 45 to 50 degrees, and the wing must produce lift equal to the load factor to hold altitude.",
  "page": "31"
 },
 {
  "id": "s5-014",
  "section": 5,
  "sectionName": "Loading",
  "question": "What load factor does a coordinated, level turn at an 80-degree bank produce?",
  "choices": [
   "5.76 Gs",
   "2 Gs",
   "3.76 Gs",
   "7.76 Gs"
  ],
  "answer": 0,
  "explanation": "The load factor in an 80-degree banked level turn is 5.76 Gs, and at slightly more than 80 degrees it exceeds 6 Gs, the limit load factor of an acrobatic aircraft. A 90-degree banked, constant-altitude turn is not mathematically possible.",
  "page": "31"
 },
 {
  "id": "s5-015",
  "section": 5,
  "sectionName": "Loading",
  "question": "An aircraft with a normal unaccelerated stalling speed of 50 knots is subjected to a load factor of 4 Gs. At what speed can it now be stalled?",
  "choices": [
   "100 knots",
   "70 knots",
   "150 knots",
   "200 knots"
  ],
  "answer": 0,
  "explanation": "Stalling speed increases in proportion to the square root of the load factor, so at 4 Gs a 50-knot unaccelerated stalling speed becomes 100 knots. If the same aircraft could withstand 9 Gs, it could be stalled at 150 knots. Any aircraft, within the limits of its structure, may be stalled at any airspeed.",
  "page": "31"
 },
 {
  "id": "s5-016",
  "section": 5,
  "sectionName": "Loading",
  "question": "An aircraft with a normal unaccelerated stalling speed of 45 knots is banked beyond 72 degrees in a steep turn. What airspeed is needed to prevent a stall?",
  "choices": [
   "Greater than 75 knots",
   "Greater than 45 knots",
   "Greater than 60 knots",
   "Greater than 90 knots"
  ],
  "answer": 0,
  "explanation": "Banking greater than 72 degrees produces a load factor of 3, which significantly raises stalling speed. With a normal unaccelerated stalling speed of 45 knots, the airspeed must be kept above 75 knots to avoid inducing a stall. The same effect occurs in a quick pull-up or any maneuver producing more than 1 G.",
  "page": "32"
 },
 {
  "id": "s5-017",
  "section": 5,
  "sectionName": "Loading",
  "question": "What is the direct result of operating an aircraft with its center of gravity outside the approved limits?",
  "choices": [
   "Difficulty controlling the aircraft",
   "Compromised structural integrity",
   "Reduced fuel efficiency at cruise",
   "Higher engine operating temperatures"
  ],
  "answer": 0,
  "explanation": "Operation with the CG outside the approved limits results in control difficulty. Compromised structural integrity and degraded performance are the consequences of a different violation, operating above the maximum weight limitation. Weight and balance data must be frequently reevaluated.",
  "page": "32"
 },
 {
  "id": "s5-018",
  "section": 5,
  "sectionName": "Loading",
  "question": "Which combination of performance changes should a pilot expect from an overloaded aircraft?",
  "choices": [
   "Higher takeoff speed, reduced rate of climb, and higher stalling speed",
   "Lower takeoff speed, reduced rate of climb, and lower stalling speed",
   "Higher takeoff speed, increased rate of climb, and longer range",
   "Lower stalling speed, shorter landing roll, and reduced cruising speed"
  ],
  "answer": 0,
  "explanation": "Excess weight hurts performance in almost every respect: higher takeoff speed, longer takeoff run, reduced rate and angle of climb, lower maximum altitude, shorter range, reduced cruising speed, reduced maneuverability, higher stalling speed, higher approach and landing speed, and longer landing roll. If improperly loaded, the first sign of poor performance usually appears during takeoff.",
  "page": "33"
 },
 {
  "id": "s6-001",
  "section": 6,
  "sectionName": "Emergency Procedures",
  "question": "How does the FAA characterize a typical in-flight emergency involving a small unmanned aircraft?",
  "choices": [
   "An unexpected and unforeseen event that can have serious consequences for an unprepared remote pilot",
   "A mechanical failure that develops gradually and leaves the remote pilot ample time to plan a response",
   "A planned contingency that every crew is required to rehearse on site before the aircraft is launched",
   "A weather-related event that careful preflight planning is expected to eliminate entirely"
  ],
  "answer": 0,
  "explanation": "An in-flight emergency is usually unexpected and unforeseen, and its consequences fall hardest on a remote pilot who has not prepared. That is why the rules grant deviation authority during an emergency and why crews are briefed on emergency procedures before flight.",
  "page": "35"
 },
 {
  "id": "s6-002",
  "section": 6,
  "sectionName": "Emergency Procedures",
  "question": "During an in-flight emergency, how much of 14 CFR part 107 is the remote pilot permitted to deviate from?",
  "choices": [
   "Any part of the rule, to the extent needed to respond to the emergency",
   "Only the operating limitations on altitude and groundspeed",
   "Only provisions that do not affect the safety of people on the ground",
   "No part of it; the aircraft must instead be landed as soon as practical"
  ],
  "answer": 0,
  "explanation": "In an emergency the remote pilot may deviate from any part of 14 CFR part 107 in order to respond to it. The authority is not limited to particular rules; the pilot may take any action needed to keep the aircraft from becoming a hazard to people or property.",
  "page": "35"
 },
 {
  "id": "s6-003",
  "section": 6,
  "sectionName": "Emergency Procedures",
  "question": "A remote pilot deviates from part 107 while handling an in-flight emergency. When must that deviation be reported?",
  "choices": [
   "Only if the FAA asks for a report",
   "Immediately after landing, to the nearest air traffic control facility",
   "Within 10 days of the flight, in every case",
   "Within 30 days, but only if the deviation resulted in damage"
  ],
  "answer": 0,
  "explanation": "There is no automatic reporting requirement for an emergency deviation. The remote pilot reports the deviation only when the FAA, also called the Administrator, requests it. Absent that request, no report is due at all.",
  "page": "35"
 },
 {
  "id": "s6-004",
  "section": 6,
  "sectionName": "Emergency Procedures",
  "question": "When part 107 refers to \"the Administrator,\" which organization does it mean?",
  "choices": [
   "The Federal Aviation Administration",
   "The National Transportation Safety Board",
   "The Department of Transportation's Office of Inspector General",
   "The International Civil Aviation Organization"
  ],
  "answer": 0,
  "explanation": "\"The Administrator\" is another name for the FAA. This matters for emergency deviations: the pilot reports a deviation only when asked by the FAA, and regulatory text expresses that as a request from the Administrator.",
  "page": "35"
 },
 {
  "id": "s6-005",
  "section": 6,
  "sectionName": "Emergency Procedures",
  "question": "A preflight inspection turns up an irregularity with the small unmanned aircraft. What must happen before the aircraft is flown?",
  "choices": [
   "The irregularity must be corrected",
   "The irregularity must be logged and then watched over the next several flights",
   "A visual observer must be assigned to monitor the affected component in flight",
   "The manufacturer must be notified and must approve the flight in writing"
  ],
  "answer": 0,
  "explanation": "Any irregularity found during the preflight inspection must be corrected before the small unmanned aircraft is operated. Flying with a known defect is not an option, whether or not someone monitors it, because the remote pilot must ensure the aircraft is in a safe operating condition before every flight.",
  "page": "35"
 },
 {
  "id": "s6-006",
  "section": 6,
  "sectionName": "Emergency Procedures",
  "question": "The manufacturer of a small unmanned aircraft provides no preflight inspection items. What should the remote pilot do?",
  "choices": [
   "Develop a checklist detailed enough that the aircraft will be operated in a safe condition",
   "Use the preflight inspection checklist published for the most similar model from another manufacturer",
   "Request that the FAA issue an inspection checklist for that model before operating it",
   "Perform a general walk-around only, since no formal inspection items apply to that model"
  ],
  "answer": 0,
  "explanation": "Some manufacturers supply preflight inspection items and some do not. When none exist, the remote pilot should create a checklist of their own with enough information to ensure the aircraft is operated in a safe condition. The inspection itself is required before every flight either way.",
  "page": "35"
 },
 {
  "id": "s6-007",
  "section": 6,
  "sectionName": "Emergency Procedures",
  "question": "A small unmanned aircraft develops a battery fire in flight. Which response does the FAA give as an example of permissible emergency action?",
  "choices": [
   "Climbing above 400 feet AGL to maneuver to a safe landing area",
   "Holding at or below 400 feet AGL, because the altitude limit still applies in an emergency",
   "Descending straight down immediately, regardless of what is beneath the aircraft",
   "Jettisoning the battery over an open area before attempting to land"
  ],
  "answer": 0,
  "explanation": "A battery fire is the FAA's example of an in-flight emergency: the remote pilot may climb the aircraft above 400 feet AGL if that is what it takes to reach a safe landing area, because the pilot may take any action needed to avoid a hazard to people or property. A report is required only if the FAA asks for one.",
  "page": "35"
 },
 {
  "id": "s6-008",
  "section": 6,
  "sectionName": "Emergency Procedures",
  "question": "When additional crewmembers support a small UA flight, who must be briefed on the operation and its planned emergency procedures?",
  "choices": [
   "All crewmembers, including visual observers and anyone manipulating the flight controls",
   "Only crewmembers who hold a remote pilot certificate of their own",
   "Only the visual observers, because they work away from the control station displays",
   "Only the person manipulating the flight controls, since other crewmembers are not directly involved"
  ],
  "answer": 0,
  "explanation": "Every crewmember used on a flight must be briefed on the operation and the planned emergency procedures. That briefing covers any visual observers and any non-certificated person who is allowed to manipulate the flight controls, not just certificate holders.",
  "page": "35"
 },
 {
  "id": "s8-001",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "Remote pilots are not expected to transmit on aviation frequencies, so why should they still learn aviation radio language?",
  "choices": [
   "A radio lets them follow nearby traffic and build situational awareness",
   "They must read back every ATC clearance that applies to their operating area",
   "They are required to relay traffic advisories to manned aircraft in the pattern",
   "They must log all radio traffic they overhear during each flight"
  ],
  "answer": 0,
  "explanation": "Small UA pilots are not expected to communicate over radio frequencies, but understanding the conversations they hear lets them use a radio as an aid to situational awareness while operating in the National Airspace System.",
  "page": "39"
 },
 {
  "id": "s8-002",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "What has ICAO adopted for pilots to use when identifying their aircraft to ATC?",
  "choices": [
   "A phonetic alphabet with a spoken word standing for each letter",
   "Plain English letter names spoken slowly and repeated twice",
   "A numeric identification code assigned by the FAA to each airframe",
   "Morse code tones keyed briefly over the voice frequency"
  ],
  "answer": 0,
  "explanation": "ICAO has adopted a phonetic alphabet for radio communications, and pilots should use it to identify their aircraft when communicating with ATC. That is why the study guide's example aircraft identifies itself on the radio as \"Cessna 123 Bravo Foxtrot.\"",
  "page": "39"
 },
 {
  "id": "s8-003",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "Which reference helps a pilot learn standard radio terminology?",
  "choices": [
   "The Pilot/Controller Glossary in the AIM",
   "The legend pages printed on every sectional chart",
   "The airport listings in the Chart Supplement U.S.",
   "The definitions section of 14 CFR part 107"
  ],
  "answer": 0,
  "explanation": "Reviewing the Pilot/Controller Glossary contained in the Aeronautical Information Manual helps a pilot understand standard radio terminology, and the AIM also contains many examples of radio communications.",
  "page": "39"
 },
 {
  "id": "s8-004",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "Even while monitoring the CTAF, why must a remote pilot keep visually scanning for aircraft near a non-towered airport?",
  "choices": [
   "Radio calls there are good practice for manned pilots but not required by regulation",
   "The CTAF carries only recorded weather during daytime operating hours",
   "Position reports on the CTAF are limited to aircraft flying instrument approaches",
   "Manned aircraft switch to an air-to-air frequency once inside the traffic pattern"
  ],
  "answer": 0,
  "explanation": "Radio broadcasts in the vicinity of a non-towered airport are good operating procedure for manned aircraft, but by regulation they are not mandatory. A remote pilot must therefore always look for other aircraft in the area and treat the radio as an extra layer of situational awareness, not a substitute for scanning.",
  "page": "41"
 },
 {
  "id": "s8-005",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "At an airport without an operating control tower, what are the three ways pilots can communicate their intentions and obtain traffic information?",
  "choices": [
   "Communicating with an FSS, with a UNICOM operator, or by self-announcing",
   "Calling approach control, monitoring the ATIS, or using light gun signals",
   "Contacting the overlying center, phoning the airport manager, or squawking 1200",
   "Monitoring the ATIS, contacting clearance delivery, or calling flight watch"
  ],
  "answer": 0,
  "explanation": "At an airport with no operating tower, pilots have three ways to communicate intentions and get airport and traffic information: communicating with a flight service station, communicating with a UNICOM operator, or making a self-announce broadcast.",
  "page": "40"
 },
 {
  "id": "s8-006",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "How are the features of an automated UNICOM system typically selected?",
  "choices": [
   "By microphone clicks on the UNICOM frequency",
   "By keying a four-digit code on the transponder",
   "By tuning a separate secondary frequency for each feature",
   "By speaking the airport identifier followed by a feature name"
  ],
  "answer": 0,
  "explanation": "Many airports provide automated weather, radio check capability, and airport advisory information through an automated UNICOM system. Its features are typically selectable by microphone clicks on the UNICOM frequency, and availability is published in the Airport/Facility Directory and on approach charts.",
  "page": "40"
 },
 {
  "id": "s8-007",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "What is a Common Traffic Advisory Frequency (CTAF) designated for?",
  "choices": [
   "Airport advisory practices at an airport without an operating control tower",
   "Takeoff and landing clearances issued by a controller at a remote facility",
   "Continuous recorded weather broadcasts at airports with part-time towers",
   "Coordinating IFR clearance delivery with the overlying air route center"
  ],
  "answer": 0,
  "explanation": "A CTAF is a frequency designated for carrying out airport advisory practices while operating to or from an airport that has no operating control tower. Selecting the correct common frequency is the key to communications at such an airport.",
  "page": "40"
 },
 {
  "id": "s8-008",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "Which kinds of frequencies can serve as an airport's CTAF?",
  "choices": [
   "A UNICOM, MULTICOM, FSS, or tower frequency",
   "Only a UNICOM frequency assigned by the FCC",
   "Only a MULTICOM or guard frequency",
   "An ATIS, AWOS, or approach control frequency"
  ],
  "answer": 0,
  "explanation": "The CTAF may be a UNICOM, MULTICOM, FSS, or tower frequency, and it is identified in the appropriate aeronautical publications so pilots can find the correct one for each airport.",
  "page": "40"
 },
 {
  "id": "s8-009",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "Which frequency is used at a non-towered airport that has no FSS or UNICOM?",
  "choices": [
   "The MULTICOM frequency of 122.9",
   "The UNICOM frequency of 122.8",
   "The flight service frequency of 122.2",
   "The emergency frequency of 121.5"
  ],
  "answer": 0,
  "explanation": "When a non-towered airport has no flight service station and no UNICOM, the MULTICOM frequency of 122.9 is used for traffic advisory broadcasts.",
  "page": "40"
 },
 {
  "id": "s8-010",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "Most non-towered airports use a UNICOM frequency of 122.8, but where should a remote pilot verify the correct frequency for a specific airport?",
  "choices": [
   "On the sectional chart or in the FAA Chart Supplements publication",
   "In the Pilot/Controller Glossary section of the AIM",
   "By radio check with the nearest operating control tower",
   "In the subpart of 14 CFR part 107 covering airport operations"
  ],
  "answer": 0,
  "explanation": "Although the UNICOM frequency is usually 122.8, it can vary where many non-towered airports are close together, so the correct frequency should always be checked next to the airport symbol on the sectional chart or in the FAA's Chart Supplements publication.",
  "page": "40"
 },
 {
  "id": "s8-011",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "At what distance from a non-towered airport does an inbound manned aircraft normally make its first broadcast in the blind?",
  "choices": [
   "10 miles from the airport",
   "5 miles from the airport",
   "15 miles from the airport",
   "20 miles from the airport"
  ],
  "answer": 0,
  "explanation": "Standard operating practice is for an inbound pilot to broadcast in the blind when 10 miles from the airport. That initial call also states the aircraft's position north, south, east, or west of the field, for example \"10 miles south inbound for landing.\"",
  "page": "40"
 },
 {
  "id": "s8-012",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "Why does a pilot state the airport name at both the beginning and the end of a self-announce broadcast?",
  "choices": [
   "So others on the frequency can confirm which airport the call refers to",
   "To satisfy an FCC station identification requirement for each transmission",
   "To give the UNICOM operator time to prepare a reply with wind and runway",
   "To signal that the transmission is complete and the frequency is free"
  ],
  "answer": 0,
  "explanation": "A broadcasting aircraft uses the name of the airport of intended landing at the beginning and again at the end of the broadcast. Stating the name twice lets others sharing the frequency confirm where that aircraft is going, since several airports may share one frequency.",
  "page": "41"
 },
 {
  "id": "s8-013",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "An aircraft that lands straight-in at a non-towered airport without flying the rectangular traffic pattern is usually doing what?",
  "choices": [
   "Executing an instrument approach",
   "Practicing a short-field landing technique",
   "Complying with a local noise abatement procedure",
   "Following instructions from the UNICOM operator"
  ],
  "answer": 0,
  "explanation": "Instead of the standard 45 degree entry to the downwind leg, an aircraft may land straight-in without entering the rectangular traffic pattern. Aircraft executing an instrument approach usually use this method, announcing it with a call such as \"one mile north of the airport, GPS runway 18, full stop landing.\"",
  "page": "41"
 },
 {
  "id": "s8-014",
  "section": 8,
  "sectionName": "Radio Communications",
  "question": "When should a remote pilot transmit over an active aviation frequency?",
  "choices": [
   "Only when there is an emergency situation",
   "Before every launch and recovery near an airport",
   "Whenever a manned aircraft reports entering the traffic pattern",
   "At regular intervals for as long as the small UA is airborne"
  ],
  "answer": 0,
  "explanation": "It is good practice for a remote pilot near any airport to carry a radio and monitor the appropriate frequencies, but the remote pilot should refrain from transmitting over any active aviation frequency unless there is an emergency situation.",
  "page": "41"
 },
 {
  "id": "s9-001",
  "section": 9,
  "sectionName": "Determining Performance",
  "question": "When pressure is held constant, how does air density respond to changes in temperature?",
  "choices": [
   "It varies inversely with temperature",
   "It varies directly with temperature",
   "It is unaffected by temperature changes",
   "It varies with the square of the temperature"
  ],
  "answer": 0,
  "explanation": "At a constant pressure, heating air makes it less dense and cooling air makes it more dense, so density and temperature move in opposite directions. That inverse relationship is why a hot day raises density altitude and cuts into aircraft performance.",
  "page": "43"
 },
 {
  "id": "s9-002",
  "section": 9,
  "sectionName": "Determining Performance",
  "question": "Temperature and pressure both fall as altitude increases, and they push air density in opposite directions. What is the net result a pilot should expect?",
  "choices": [
   "Density decreases, because the pressure drop has the dominating effect",
   "Density increases, because the temperature drop has the dominating effect",
   "Density stays the same, because the two effects cancel each other out",
   "Density increases, because cold air always outweighs pressure changes"
  ],
  "answer": 0,
  "explanation": "Falling temperature would raise density while falling pressure would lower it, but the fairly rapid pressure drop with altitude usually dominates. Pilots should therefore expect air density to decrease as altitude increases.",
  "page": "43"
 },
 {
  "id": "s9-003",
  "section": 9,
  "sectionName": "Determining Performance",
  "question": "How does moist air compare with perfectly dry air?",
  "choices": [
   "It is less dense, because water vapor is lighter than air",
   "It is more dense, because water vapor adds weight to the air",
   "It has the same density whenever the temperatures match",
   "It is less dense only when the temperature is below freezing"
  ],
  "answer": 0,
  "explanation": "Water vapor weighs less than dry air, so adding moisture makes the air lighter, not heavier. Air is at its least dense when it holds the maximum amount of water vapor it can for the conditions.",
  "page": "43"
 },
 {
  "id": "s9-004",
  "section": 9,
  "sectionName": "Determining Performance",
  "question": "As the water vapor content of the air increases, what happens to density altitude and aircraft performance?",
  "choices": [
   "Density altitude increases and performance decreases",
   "Density altitude decreases and performance increases",
   "Density altitude increases and performance increases",
   "Density altitude decreases and performance decreases"
  ],
  "answer": 0,
  "explanation": "More water vapor makes the air less dense, which raises density altitude. Higher density altitude means the aircraft performs as if it were flying at a higher altitude, so performance suffers.",
  "page": "43"
 },
 {
  "id": "s9-005",
  "section": 9,
  "sectionName": "Determining Performance",
  "question": "What does relative humidity measure?",
  "choices": [
   "The water vapor in the air as a percentage of the most it can hold",
   "The weight of water vapor as a percentage of the air's total weight",
   "The percentage of flight time an aircraft spends in visible moisture",
   "The difference between the outside temperature and the dewpoint"
  ],
  "answer": 0,
  "explanation": "Relative humidity expresses the amount of water vapor in the atmosphere as a percentage of the maximum the air can hold, and that maximum changes with temperature: warm air can hold more water vapor than cold air. Perfectly dry air is at 0 percent and saturated air is at 100 percent.",
  "page": "43"
 },
 {
  "id": "s9-006",
  "section": 9,
  "sectionName": "Determining Performance",
  "question": "What role does humidity by itself play in calculating density altitude and aircraft performance?",
  "choices": [
   "It contributes, but alone it is usually not an important factor",
   "It is the dominant factor and matters more than air temperature",
   "It plays no part at all in density altitude or performance",
   "It only matters once the relative humidity reaches 100 percent"
  ],
  "answer": 0,
  "explanation": "Humidity does reduce air density and so contributes to density altitude, but on its own it is usually not considered an important factor in the calculation. Temperature and pressure carry more weight; humidity is a contributing factor rather than a driving one.",
  "page": "43"
 },
 {
  "id": "s9-007",
  "section": 9,
  "sectionName": "Determining Performance",
  "question": "What should a remote pilot keep in mind about the operational performance data that small UA manufacturers publish?",
  "choices": [
   "It is not standardized from one manufacturer to another",
   "It must follow a format that the FAA standardizes",
   "It covers only takeoff and landing distances",
   "It is interchangeable between any models of similar weight"
  ],
  "answer": 0,
  "explanation": "Manufacturers may publish data on takeoff, climb, range, endurance, descent, and landing, but the information is not standardized between manufacturers. Understanding what the data means for a specific aircraft is essential for making practical, safe use of its capabilities and limitations.",
  "page": "43"
 },
 {
  "id": "s9-008",
  "section": 9,
  "sectionName": "Determining Performance",
  "question": "If the manufacturer has not published performance data for a small UA, what is an advisable starting point?",
  "choices": [
   "Performance data determined and shared by other users of the same model",
   "Performance data published for a different model by the same manufacturer",
   "Conservative estimates taken from the FAA's own performance tables",
   "The default performance limits programmed into the control station"
  ],
  "answer": 0,
  "explanation": "When manufacturer-published performance data is unavailable, it is advisable to look for data that other users of the same make and model have already determined and published, and to treat those figures as a starting point rather than a guarantee.",
  "page": "43"
 },
 {
  "id": "s10-001",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "Under part 107, how much time must have passed since a person's last alcoholic drink before that person may serve as a crewmember on a small UA operation?",
  "choices": [
   "8 hours",
   "4 hours",
   "12 hours",
   "24 hours"
  ],
  "answer": 0,
  "explanation": "Part 107 prohibits anyone from serving as remote PIC, person manipulating the controls, visual observer, or other crewmember after consuming any alcoholic beverage within the preceding 8 hours. The same prohibition applies to being under the influence of alcohol or using a drug that affects mental or physical capabilities.",
  "page": "45"
 },
 {
  "id": "s10-002",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "At what blood alcohol concentration does part 107 bar a person from serving in any crew role on a small UA operation?",
  "choices": [
   ".04 percent or greater",
   ".02 percent or greater",
   ".08 percent or greater",
   ".10 percent or greater"
  ],
  "answer": 0,
  "explanation": "A blood alcohol concentration of .04 percent or greater disqualifies a person from acting as remote PIC, manipulating the controls, or serving as a visual observer or other crewmember. Even below .04 percent, a person still may not participate until 8 hours have passed since drinking.",
  "page": "45"
 },
 {
  "id": "s10-003",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "What happens in the body during hyperventilation?",
  "choices": [
   "Excess breathing strips too much carbon dioxide from the blood",
   "Shallow breathing lets carbon dioxide build up in the bloodstream",
   "Rapid breathing floods the bloodstream with too much oxygen",
   "Slow breathing keeps the muscles from getting enough oxygen"
  ],
  "answer": 0,
  "explanation": "Hyperventilation is an excessive rate and depth of breathing that causes an abnormal loss of carbon dioxide from the blood. Pilots facing an unexpected stressful situation may speed up their breathing without realizing it, and the resulting anxiety and faster breathing make the problem worse, potentially to the point of unconsciousness.",
  "page": "45"
 },
 {
  "id": "s10-004",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "Which of the following is a common symptom of hyperventilation?",
  "choices": [
   "Tingling and muscle spasms",
   "Ringing in the ears",
   "Swelling in the hands and feet",
   "A gradual loss of hearing"
  ],
  "answer": 0,
  "explanation": "Common hyperventilation symptoms include tingling sensations, muscle spasms, visual impairment, a lightheaded or dizzy feeling, hot and cold sensations, and even unconsciousness. It rarely incapacitates completely, but the symptoms can alarm a pilot who does not recognize what is happening.",
  "page": "45"
 },
 {
  "id": "s10-005",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "A remote pilot who begins hyperventilating during a stressful situation can best recover by doing what?",
  "choices": [
   "Slow the breathing rate or breathe into a paper bag",
   "Breathe pure oxygen as deeply and rapidly as possible",
   "Take quick shallow breaths until the dizziness passes",
   "Hold the breath for at least two full minutes"
  ],
  "answer": 0,
  "explanation": "Recovery from hyperventilation means restoring the proper carbon dioxide level in the body. Breathing normally is both the best prevention and the best cure; slowing the breathing rate, breathing into a paper bag, or talking aloud all help, and recovery is usually rapid once the breathing rate returns to normal.",
  "page": "46"
 },
 {
  "id": "s10-006",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "Which kind of stress triggers the body's fight-or-flight response?",
  "choices": [
   "Acute stress from an immediate perceived threat",
   "Chronic stress from ongoing financial worries",
   "Physiological stress caused by ordinary fatigue",
   "Physical stress from steady noise and vibration"
  ],
  "answer": 0,
  "explanation": "Acute, short-term stress involves an immediate threat perceived as danger, whether real or imagined, and it is this type that triggers the fight-or-flight response. A healthy person can normally cope with acute stress, but if it continues unchecked it can develop into chronic stress.",
  "page": "46"
 },
 {
  "id": "s10-007",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "How should a pilot respond to a suspected case of chronic stress?",
  "choices": [
   "Stop exercising airman privileges and consult a physician",
   "Fly shorter, simpler missions until the pressure eases",
   "Rely on training and experience to push through it in flight",
   "Wait it out, since this level of stress clears within days"
  ],
  "answer": 0,
  "explanation": "Chronic stress is an intolerable burden that exceeds a person's ability to cope, and performance falls off rapidly when stress reaches that level. Pilots under chronic stress are not safe, should not exercise their airman privileges, and should consult a physician.",
  "page": "46"
 },
 {
  "id": "s10-008",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "What ordinarily relieves acute fatigue after strenuous effort, excitement, or lost sleep?",
  "choices": [
   "Rest after the exertion and 8 hours of sound sleep",
   "Caffeine and light exercise shortly before the flight",
   "A course of treatment prescribed by a physician",
   "A high-protein meal eaten just before the operation"
  ],
  "answer": 0,
  "explanation": "Acute fatigue is short term and a normal part of everyday living. Rest after the exertion plus 8 hours of sound sleep ordinarily cures it, and proper diet with adequate rest prevents it. A remote pilot suffering from acute fatigue should not operate a small UA, because no amount of training or experience overcomes fatigue in flight.",
  "page": "46"
 },
 {
  "id": "s10-009",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "Skill fatigue can cause a disruption of the perceptual field. How does that disruption affect a pilot?",
  "choices": [
   "The pilot watches the center of vision and misses the periphery",
   "Vision blurs evenly across the entire field of view at all distances",
   "The eyes lose the ability to focus on objects that are close by",
   "Colors near the edge of vision appear washed out and dim"
  ],
  "answer": 0,
  "explanation": "With a disrupted perceptual field, attention concentrates on movements and objects in the center of vision while those in the periphery go neglected, and control movements lose accuracy and smoothness. Skill fatigue's other main effect is timing disruption, where each part of a task is performed separately instead of as one integrated activity.",
  "page": "47"
 },
 {
  "id": "s10-010",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "How does chronic fatigue differ from acute fatigue when it comes to recovery?",
  "choices": [
   "It usually requires a physician's care rather than rest and diet",
   "It clears faster because the body adapts to prolonged tiredness",
   "It responds to the same rest and diet measures, only more slowly",
   "It can be managed during flight through training and experience"
  ],
  "answer": 0,
  "explanation": "Chronic fatigue extends over a long time, usually has psychological roots, and is not relieved by proper diet and adequate rest and sleep; it usually requires treatment by a physician. It can show up as weakness, tiredness, heart palpitations, breathlessness, headaches, or irritability.",
  "page": "47"
 },
 {
  "id": "s10-011",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "What is the first noticeable effect of dehydration?",
  "choices": [
   "Fatigue",
   "Extreme thirst",
   "Muscle cramps",
   "Nausea"
  ],
  "answer": 0,
  "explanation": "Fatigue shows up first, making top physical and mental performance difficult or impossible, and if fluid is not replaced it progresses to dizziness, weakness, nausea, tingling, abdominal cramps, and extreme thirst. Thirst is a late warning: most people only feel it after a 1.5 quart deficit, about 2 percent of body weight, and a small sip turns the thirst mechanism off too easily.",
  "page": "47"
 },
 {
  "id": "s10-012",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "As a general guide, how much water should a person drink every 24 hours to help prevent dehydration?",
  "choices": [
   "Two to four quarts",
   "One to two quarts",
   "Four to six quarts",
   "Six to eight quarts"
  ],
  "answer": 0,
  "explanation": "Drinking two to four quarts of water every 24 hours is the general guide, though individuals differ; the familiar eight 8-ounce glasses a day works out to two quarts. Other habits that help are carrying a container to measure intake, staying ahead of thirst rather than waiting for it, and limiting caffeine and alcohol since both are diuretics.",
  "page": "47"
 },
 {
  "id": "s10-013",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "What causes heatstroke?",
  "choices": [
   "The body becomes unable to control its own temperature",
   "The heart cannot keep up with the demand for blood flow",
   "The sweat glands flush too much salt out of the body",
   "The skin absorbs heat faster than the blood can shed it"
  ],
  "answer": 0,
  "explanation": "Heatstroke is any inability of the body to control its temperature. Its onset may be recognized by dehydration symptoms, but it has also been known to announce itself only with complete collapse. Prevention is drinking ample water at frequent intervals whether thirsty or not: about one quart per hour in severe heat stress, or one pint per hour in moderate conditions.",
  "page": "48"
 },
 {
  "id": "s10-014",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "Why are medications containing diphenhydramine, such as Benadryl, a particular concern for remote pilots?",
  "choices": [
   "They cause drowsiness and stay in the system for an extended time",
   "They raise blood pressure enough to imitate an acute stress response",
   "They mask cold symptoms without treating the underlying infection",
   "They interact with caffeine to trigger hyperventilation"
  ],
  "answer": 0,
  "explanation": "Antihistamines and decongestants are among the most commonly used OTC drugs, and they can cause drowsiness and cognitive deficits. Diphenhydramine in particular has a prolonged half-life, meaning it remains in the system for an extended time, which stretches out how long its side effects last.",
  "page": "49"
 },
 {
  "id": "s10-015",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "After taking the first dose of a new medication, whether prescription or over the counter, how long should a pilot wait before flying?",
  "choices": [
   "At least 48 hours",
   "At least 12 hours",
   "At least 24 hours",
   "At least 72 hours"
  ],
  "answer": 0,
  "explanation": "For any new medication, a pilot should wait at least 48 hours after the first dose before flying, long enough to find out whether it produces side effects that would make operating an aircraft unsafe. Pilots should also skip unnecessary or elective medications entirely.",
  "page": "49"
 },
 {
  "id": "s10-016",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "In the IMSAFE preflight self-assessment checklist, what does the final E stand for?",
  "choices": [
   "Emotion",
   "Endurance",
   "Experience",
   "Environment"
  ],
  "answer": 0,
  "explanation": "IMSAFE stands for Illness, Medication, Stress, Alcohol, Fatigue, and Emotion. Pilots should run through this physical self-assessment before each and every flight to confirm they are fit to operate safely.",
  "page": "49"
 },
 {
  "id": "s10-017",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "A remote pilot feels able to function normally the morning after heavy drinking but has a hangover. What does the hangover indicate?",
  "choices": [
   "The pilot is still under the influence of alcohol",
   "The alcohol has cleared and only dehydration remains",
   "The pilot may fly as soon as the symptoms fade",
   "Impairment remains only if the pilot still feels drunk"
  ],
  "answer": 0,
  "explanation": "During a hangover a pilot is still under the influence of alcohol, and motor and mental impairment persist even when the pilot believes he or she is functioning normally. Considerable amounts of alcohol can remain in the body for over 16 hours, so caution is needed about flying too soon after drinking.",
  "page": "49"
 },
 {
  "id": "s10-018",
  "section": 10,
  "sectionName": "Physiological Factors",
  "question": "When visually scanning for other air traffic, how wide an area should the eyes take in at each stop?",
  "choices": [
   "About 30 degrees",
   "About 10 degrees",
   "About 60 degrees",
   "About 90 degrees"
  ],
  "answer": 0,
  "explanation": "An effective scan moves systematically from side to side, starting at the greatest distance an object can be seen and working inward toward the aircraft. Each stop covers roughly 30 degrees, lasts no longer than 2 to 3 seconds, and each new viewing point should overlap the previous field of view by 10 degrees.",
  "page": "50"
 },
 {
  "id": "s11-001",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "What is aeronautical decision-making (ADM)?",
  "choices": [
   "A systematic approach to the mental process pilots use to consistently pick the best course of action for a given set of circumstances",
   "A regulatory framework that assigns responsibility for every flight decision to the highest-ranking person at the control station during operations",
   "A memory aid listing the mechanical inspections a pilot must complete before each takeoff and again after each landing",
   "A certification requirement that measures how quickly a pilot reacts to equipment failures that occur during flight"
  ],
  "answer": 0,
  "explanation": "ADM is decision-making applied to the aviation environment: a systematic approach to the mental process pilots use to consistently determine the best course of action for the circumstances at hand, based on the latest information available. It is also a systematic approach to risk assessment and stress management.",
  "page": "51"
 },
 {
  "id": "s11-002",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Approximately what share of all aviation accidents is related to human factors?",
  "choices": [
   "50 percent",
   "65 percent",
   "80 percent",
   "95 percent"
  ],
  "answer": 2,
  "explanation": "An estimated 80 percent of all aviation accidents are related to human factors, and the vast majority of those happen during landing (24.1 percent) and takeoff (23.4 percent). Despite advances in training, equipment, and services, the human element remains the leading source of error.",
  "page": "51"
 },
 {
  "id": "s11-003",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Crew resource management (CRM) training for flight crews focuses on the effective use of which resources?",
  "choices": [
   "Human resources, hardware, and information",
   "Fuel reserves, spare parts, and alternate airports",
   "Company manuals, dispatch staff, and maintenance logs",
   "Autopilot systems, navigation databases, and radios"
  ],
  "answer": 0,
  "explanation": "CRM training centers on using all available resources effectively: human resources, hardware, and information that supports ADM. The airline industry developed it to cut accidents caused by human factors, and it works by improving crew cooperation and decision-making.",
  "page": "51"
 },
 {
  "id": "s11-004",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "What is the first of the six steps for good decision-making in the ADM process?",
  "choices": [
   "Identifying personal attitudes hazardous to safe flight",
   "Learning how to recognize and cope with stress during flight",
   "Developing risk assessment skills",
   "Evaluating the effectiveness of one's ADM skills"
  ],
  "answer": 0,
  "explanation": "Good decision-making starts with identifying personal attitudes hazardous to safe flight. The remaining steps are learning behavior modification techniques, learning to recognize and cope with stress, developing risk assessment skills, using all resources, and evaluating the effectiveness of one's ADM skills.",
  "page": "52"
 },
 {
  "id": "s11-005",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "What is the goal of risk management?",
  "choices": [
   "To eliminate every possible hazard from an operation before any flight is attempted",
   "To proactively identify safety-related hazards and mitigate the associated risks",
   "To transfer responsibility for flight hazards to the aircraft's manufacturer",
   "To document each hazard after the flight so future pilots can review it"
  ],
  "answer": 1,
  "explanation": "Risk management aims to proactively identify safety-related hazards and mitigate the risks they create. It is an important component of ADM: when a pilot follows good decision-making practices, the inherent risk in a flight is reduced or even eliminated.",
  "page": "52"
 },
 {
  "id": "s11-006",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Under the fundamental principles of risk management, when should a pilot accept a risk?",
  "choices": [
   "When the benefits outweigh the dangers, or costs",
   "When the flight cannot be rescheduled for another day",
   "When the risk was identified during preflight planning",
   "When a more experienced pilot has accepted the same risk"
  ],
  "answer": 0,
  "explanation": "One of the four fundamental risk management principles is to accept risk only when the benefits outweigh the dangers, or costs. A related principle is to accept no unnecessary risk: flying always involves some risk, but unnecessary risk brings no corresponding return.",
  "page": "52"
 },
 {
  "id": "s11-007",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "According to risk management principles, who should make risk decisions?",
  "choices": [
   "The person who can develop and implement risk controls",
   "The pilot with the most total flight hours on the team",
   "The most senior official in the operator's organization",
   "The crewmember who first identified the hazard involved"
  ],
  "answer": 0,
  "explanation": "Risk decisions belong at the appropriate level, which means they should be made by the person who is able to develop and implement the risk controls. Authority over the risk goes with the ability to actually do something about it.",
  "page": "52"
 },
 {
  "id": "s11-008",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "During which stages of a flight should risk management be integrated into planning?",
  "choices": [
   "All stages of the flight",
   "The preflight planning stage only",
   "Only the stages where a hazard has already been identified",
   "The takeoff and landing phases, where most accidents happen"
  ],
  "answer": 0,
  "explanation": "Because risk is an unavoidable part of every flight, safety requires effective risk management in all stages of the flight, not just during preflight planning. Integrating risk management into planning at all levels is one of the four fundamental principles.",
  "page": "53"
 },
 {
  "id": "s11-009",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "How is single-pilot resource management (SRM) defined?",
  "choices": [
   "The art and science of managing all resources available to a single pilot, before and during flight, to ensure a successful outcome",
   "The practice of giving one crewmember final authority over every decision so that responsibility is never divided during a flight operation",
   "The technique of automating as many aircraft control tasks as possible so the pilot can concentrate on scanning for other air traffic",
   "The process of qualifying a pilot to operate legally without a visual observer or any other support personnel at the launch site"
  ],
  "answer": 0,
  "explanation": "SRM is the art and science of managing all the resources available to a single pilot, both prior to and during flight, to ensure a successful outcome. It grew out of CRM concepts and includes ADM, risk management, task management, automation management, CFIT awareness, and situational awareness.",
  "page": "53"
 },
 {
  "id": "s11-010",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "In aeronautical decision-making, what is a hazard?",
  "choices": [
   "The value a pilot assigns to the worst possible outcome of a flight",
   "A real or perceived condition, event, or circumstance that a pilot encounters",
   "Any violation of the operating regulations that occurs during a flight",
   "A pilot's assessment of how severely a condition could affect the outcome of the flight"
  ],
  "answer": 1,
  "explanation": "A hazard is a real or perceived condition, event, or circumstance that a pilot encounters. When faced with one, the pilot assigns a value to its potential impact, and that assessment is the risk. Hazard is the condition itself; risk is the pilot's judgment of it.",
  "page": "53"
 },
 {
  "id": "s11-011",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "In aeronautical decision-making, what is risk?",
  "choices": [
   "The pilot's assessment of the potential impact of a single or cumulative hazard",
   "A condition, event, or circumstance that the pilot encounters during a flight",
   "The chance that a mechanical failure will occur on any particular flight",
   "Any operation conducted when the weather is below the pilot's personal minimums"
  ],
  "answer": 0,
  "explanation": "Risk is the pilot's assessment of the single or cumulative hazards being faced: the value the pilot assigns to the potential impact of a hazard. Because it is an assessment, different pilots can see the same hazard quite differently.",
  "page": "53"
 },
 {
  "id": "s11-012",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Which list names the five hazardous attitudes that can interfere with sound decision-making?",
  "choices": [
   "Anti-authority, impulsivity, invulnerability, macho, and resignation",
   "Anti-authority, complacency, invulnerability, macho, and distraction",
   "Impulsivity, distraction, invulnerability, resignation, and stress",
   "Complacency, impulsivity, macho, resignation, and fixation"
  ],
  "answer": 0,
  "explanation": "Studies have identified five hazardous attitudes that interfere with the ability to make sound decisions and exercise authority properly: anti-authority, impulsivity, invulnerability, macho, and resignation. Attitude is a motivational predisposition to respond to people, situations, or events in a given way.",
  "page": "53"
 },
 {
  "id": "s11-013",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "What is the first step toward neutralizing a hazardous attitude?",
  "choices": [
   "Recognizing the thought as hazardous",
   "Stating the corresponding antidote aloud",
   "Writing the thought down for a postflight review",
   "Canceling the operation until the feeling passes"
  ],
  "answer": 0,
  "explanation": "Recognition of hazardous thoughts is the first step toward neutralizing them. After recognizing a thought as hazardous, the pilot labels it as hazardous and then states the corresponding antidote. Antidotes should be memorized so they come to mind automatically when needed.",
  "page": "53"
 },
 {
  "id": "s11-014",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Which antidote counters the anti-authority attitude?",
  "choices": [
   "Follow the rules. They are usually right.",
   "I'm not helpless. I can make a difference.",
   "It could happen to me.",
   "Taking chances is foolish."
  ],
  "answer": 0,
  "explanation": "The anti-authority attitude belongs to people who resent being told what to do and treat rules and procedures as unnecessary. Its antidote is \"Follow the rules. They are usually right.\" Each of the five hazardous attitudes has its own memorized antidote.",
  "page": "54"
 },
 {
  "id": "s11-015",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "A remote pilot who feels the need to act immediately and does the first thing that comes to mind, without weighing the alternatives, is displaying which hazardous attitude?",
  "choices": [
   "Impulsivity",
   "Macho",
   "Anti-authority",
   "Resignation"
  ],
  "answer": 0,
  "explanation": "Impulsivity is the attitude of people who feel they must do something, anything, immediately, so they take the first action that occurs to them instead of selecting the best alternative. Its antidote is \"Not so fast. Think first.\"",
  "page": "54"
 },
 {
  "id": "s11-016",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Which antidote counters the invulnerability attitude?",
  "choices": [
   "It could happen to me.",
   "I'm not helpless. I can make a difference.",
   "Taking chances is foolish.",
   "Follow the rules. They are usually right."
  ],
  "answer": 0,
  "explanation": "Invulnerability is the belief that accidents happen to other people. Pilots who feel this way are more likely to take chances and increase risk, so the antidote to memorize is \"It could happen to me.\"",
  "page": "54"
 },
 {
  "id": "s11-017",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Which antidote counters the macho attitude?",
  "choices": [
   "Taking chances is foolish.",
   "It could happen to me.",
   "Not so fast. Think first.",
   "Follow the rules. They are usually right."
  ],
  "answer": 0,
  "explanation": "The macho attitude drives pilots to take risks to prove they are better than everyone else, and it is found in both men and women. Its antidote is \"Taking chances is foolish.\"",
  "page": "54"
 },
 {
  "id": "s11-018",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "A pilot who thinks \"What's the use?\" and believes the outcome of the flight is out of personal control is showing which hazardous attitude?",
  "choices": [
   "Resignation",
   "Invulnerability",
   "Impulsivity",
   "Anti-authority"
  ],
  "answer": 0,
  "explanation": "Resignation is the attitude of pilots who do not see themselves as able to make a great deal of difference in what happens to them, leaving the outcome to luck or to others. The antidote is \"I'm not helpless. I can make a difference.\"",
  "page": "54"
 },
 {
  "id": "s11-019",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "What does the IMSAFE checklist help a pilot determine?",
  "choices": [
   "Physical and mental readiness for flying",
   "Whether the aircraft can safely carry the planned load",
   "Whether the weather meets the pilot's personal minimums",
   "Whether outside pressures are driving the go/no-go decision"
  ],
  "answer": 0,
  "explanation": "IMSAFE is one of the best tools a single pilot has for mitigating risk: a self-check of physical and mental readiness covering Illness, Medication, Stress, Alcohol, Fatigue, and Emotion. Fatigue is called out as especially insidious because it may not be apparent until serious errors are already being made.",
  "page": "55"
 },
 {
  "id": "s11-020",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "What four risk categories make up the PAVE checklist?",
  "choices": [
   "Pilot-in-command, Aircraft, enVironment, and External pressures",
   "Planning, Airspace, Visibility, and Equipment condition",
   "Pilot-in-command, Altitude, Visibility, and Emergencies",
   "Preflight planning, Aircraft, enVironment, and Emergencies"
  ],
  "answer": 0,
  "explanation": "The PAVE checklist divides the risks of a flight into Pilot-in-command, Aircraft, enVironment, and External pressures, giving the pilot a simple way to examine each category before every flight. If the identified risks cannot be managed safely, the decision should be to cancel the flight.",
  "page": "55"
 },
 {
  "id": "s11-021",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "What are personal minimums?",
  "choices": [
   "Limits unique to an individual pilot's current level of experience and proficiency",
   "The lowest weather values that the regulations permit for any small UA operation",
   "The manufacturer's published operating limitations for a specific aircraft model",
   "Restrictions an employer applies uniformly to every pilot in its organization"
  ],
  "answer": 0,
  "explanation": "Personal minimums are limits a pilot sets for items in each PAVE risk category, and they are unique to that pilot's current level of experience and proficiency. Setting them is one way to control risk after the risks of a flight have been identified.",
  "page": "55"
 },
 {
  "id": "s11-022",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Why is managing external pressures described as the single most important key to risk management?",
  "choices": [
   "External pressure is the one risk-factor category that can cause a pilot to ignore all the other risk factors",
   "External pressure is the only risk-factor category that the regulations require a pilot to document before flight",
   "External pressure is the easiest risk-factor category to eliminate entirely during preflight preparations",
   "External pressure is the only risk-factor category that keeps changing while a flight is under way"
  ],
  "answer": 0,
  "explanation": "External pressures, such as the desire to impress someone or plain goal-completion drive, can push a pilot to disregard every other risk factor, which is why managing them is called the single most important key to risk management. Personal standard operating procedures are one way to provide a release for these pressures.",
  "page": "56"
 },
 {
  "id": "s11-023",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "In the 3P model of aeronautical decision-making, what do the three Ps stand for?",
  "choices": [
   "Perceive, Process, Perform",
   "Plan, Prepare, Proceed",
   "Predict, Prevent, Prevail",
   "Perceive, Prepare, Proceed"
  ],
  "answer": 0,
  "explanation": "In the 3P model the pilot Perceives the circumstances of the flight, Processes them by evaluating their impact on flight safety, and Performs by implementing the best course of action. Adding an Evaluate step turns it into a continuous model for every aeronautical decision.",
  "page": "57"
 },
 {
  "id": "s11-024",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Within the 3P cycle, what does the CARE checklist stand for when processing hazards?",
  "choices": [
   "Consequences, Alternatives, Reality, External factors",
   "Conditions, Aircraft, Risks, Environment",
   "Consequences, Actions, Resources, Evaluation",
   "Checklists, Alternatives, Reality, External pressures"
  ],
  "answer": 0,
  "explanation": "Pilots perceive hazards with the PAVE checklist, then process them with CARE: Consequences, Alternatives, Reality, and External factors. This is the middle step of the practical 3P risk management model.",
  "page": "58"
 },
 {
  "id": "s11-025",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Which choices does the TEAM list give a pilot for performing risk management?",
  "choices": [
   "Transfer, Eliminate, Accept, or Mitigate",
   "Train, Evaluate, Act, or Monitor",
   "Transfer, Eliminate, Assess, or Minimize",
   "Test, Eliminate, Assess, or Manage"
  ],
  "answer": 0,
  "explanation": "In the Perform step of the 3P model, the pilot acts on each identified risk using the TEAM choice list: Transfer it, Eliminate it, Accept it, or Mitigate it. Most flight training activity happens in the time-critical timeframe, where this compact model is practical.",
  "page": "58"
 },
 {
  "id": "s11-026",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "In the DECIDE model, what does the first D stand for?",
  "choices": [
   "Detect that a change has occurred",
   "Determine the aircraft's exact position",
   "Declare the nature of the problem to others",
   "Delegate tasks to any available crewmembers"
  ],
  "answer": 0,
  "explanation": "The DECIDE model's six elements are Detect that a change has occurred, Estimate the need to counter or react to it, Choose a desirable outcome, Identify actions that can achieve it, Do the necessary action, and Evaluate the effect of the action. It is a worldwide-recognized framework for organizing decisions.",
  "page": "60"
 },
 {
  "id": "s11-027",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "What characterizes automatic, or naturalistic, decision-making?",
  "choices": [
   "A reflexive response anchored in training and experience, used most often when there is no time for analytical methods",
   "A step-by-step comparison of the pros and cons of every available option before committing to any particular action in the air",
   "A random selection among all workable options intended to remove personal bias from an emergency response decision",
   "A checklist-driven procedure that hands the decision entirely over to the manufacturer's published emergency guidance"
  ],
  "answer": 0,
  "explanation": "When pressed for time, experts first judge whether a situation feels familiar and then take the first workable option rather than comparing every alternative, relying on recognized patterns from experience. This reflexive style, anchored in training and experience, is used most often in emergencies and improves as both grow.",
  "page": "61"
 },
 {
  "id": "s11-028",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Why are experienced pilots particularly prone to the classic operational pitfalls?",
  "choices": [
   "Their desire to complete a flight as planned can distort how realistically they judge their own piloting skills",
   "Their physical reflexes decline with age noticeably faster than their aeronautical judgment and knowledge can improve",
   "Their reliance on newer automation tends to grow faster than their formal training on that automation",
   "Their habit of skipping checklists develops once frequently practiced maneuvers become fully automatic"
  ],
  "answer": 0,
  "explanation": "Experienced pilots, as a rule, try to complete a flight as planned. That goal orientation can work against safety and feed an unrealistic assessment of piloting skills, producing the behavioral traps known as operational pitfalls, which must be identified and eliminated.",
  "page": "61"
 },
 {
  "id": "s11-029",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "Which five fundamental risk elements must a pilot accurately perceive and understand to maintain situational awareness?",
  "choices": [
   "Flight, pilot, aircraft, environment, and type of operation",
   "Weather, terrain, airspace, traffic, and radio communications",
   "Pilot, crew, aircraft, fuel state, and destination",
   "Planning, takeoff, cruise, landing, and postflight"
  ],
  "answer": 0,
  "explanation": "Situational awareness means accurately perceiving and understanding all the factors and conditions within the five fundamental risk elements: flight, pilot, aircraft, environment, and type of operation. A pilot with the total picture avoids fixating on one perceived significant factor; fatigue, stress, and work overload are the obstacles that cause such fixation.",
  "page": "63"
 },
 {
  "id": "s11-030",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "What is typically the first effect of a high workload on a pilot?",
  "choices": [
   "Working harder while accomplishing less",
   "Losing all awareness of input from outside sources",
   "Making faster decisions with greater confidence",
   "Handing off essential tasks before they become urgent"
  ],
  "answer": 0,
  "explanation": "The first sign of work overload is that the pilot works harder but accomplishes less. As workload keeps rising, attention narrows to a single item, and a task-saturated pilot loses awareness of input from various sources, so decisions get made on incomplete information. The remedy is to stop, think, slow down, and prioritize.",
  "page": "64"
 },
 {
  "id": "s11-031",
  "section": 11,
  "sectionName": "Aeronautical Decision-Making",
  "question": "The FAA treats Crew Resource Management for remote pilots as part of which broader subject?",
  "choices": [
   "Aeronautical decision-making and judgment",
   "Airport operations and radio communication",
   "Loading, balance, and aircraft performance",
   "Weather theory and weather-source interpretation"
  ],
  "answer": 0,
  "explanation": "Crew Resource Management is not a standalone body of rules for remote pilots. The FAA presents it as one component of aeronautical decision-making and judgment: using every available crewmember and resource well is part of making sound operational decisions.",
  "page": "37"
 },
 {
  "id": "s12-001",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "How is an airport defined?",
  "choices": [
   "Any area of land or water used or intended for aircraft landing or takeoff",
   "Any paved surface longer than 3,000 feet that is maintained for aircraft use",
   "A facility with at least one runway and an operating control tower",
   "Any government-owned property designated for aviation and open to the public"
  ],
  "answer": 0,
  "explanation": "An airport is any area of land or water used or intended for aircraft landing or takeoff. The definition is broad enough to take in seaplane bases, heliports, and tilt rotor facilities, along with the airport's buildings, facilities, and rights of way.",
  "page": "65"
 },
 {
  "id": "s12-002",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "What makes an airport a towered airport?",
  "choices": [
   "It has an operating control tower",
   "It is open to the general public",
   "It has a published instrument approach procedure",
   "It is operated by a federal government agency"
  ],
  "answer": 0,
  "explanation": "Airports come in two types, towered and non-towered, and the difference is whether an operating control tower is present. Public access, approaches, and ownership are separate distinctions; civil, military/federal, and private airports can each be towered or non-towered.",
  "page": "65"
 },
 {
  "id": "s12-003",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "What service is air traffic control responsible for providing at a towered airport?",
  "choices": [
   "The safe, orderly, and expeditious flow of air traffic",
   "Weather forecasts for departing and arriving pilots",
   "Fuel, parking, and ground handling for transient aircraft",
   "Maintenance inspections of aircraft based at the field"
  ],
  "answer": 0,
  "explanation": "ATC's job at a towered airport is the safe, orderly, and expeditious flow of air traffic. Towers are provided where the type of operations or the volume of traffic requires that service.",
  "page": "65"
 },
 {
  "id": "s12-004",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "Which statement describes a private airport?",
  "choices": [
   "It is designated for restricted use and not open to the general public",
   "It is operated by the military, NASA, or another federal government agency",
   "It is any airport that does not have an operating control tower",
   "It is open to the general public but charges landing fees for access"
  ],
  "answer": 0,
  "explanation": "A private airport is designated for private or restricted use only and is not open to the general public. Civil airports are the ones open to the public, and military/federal government airports are run by the military, NASA, or other federal agencies.",
  "page": "65"
 },
 {
  "id": "s12-005",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "Are two-way radio communications required when operating at a non-towered airport?",
  "choices": [
   "No, but monitoring other aircraft on the specified frequency is good practice",
   "Yes, all traffic must stay in contact with the controlling facility at all times",
   "Yes, but only aircraft equipped with transponders are required to transmit",
   "No, radio transmissions at non-towered airports are prohibited to reduce interference"
  ],
  "answer": 0,
  "explanation": "Two-way radio communications are not required at a non-towered airport, but it is good practice to monitor other aircraft on the specified frequency for the benefit of other traffic. The key is selecting the correct common frequency for that airport.",
  "page": "65"
 },
 {
  "id": "s12-006",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "What is the purpose of a Common Traffic Advisory Frequency (CTAF)?",
  "choices": [
   "Carrying out airport advisory practices at an airport without an operating control tower",
   "Giving air traffic control a dedicated channel for issuing takeoff and landing clearances",
   "Broadcasting a continuous recorded loop of local weather and airport conditions",
   "Coordinating military training flights in the vicinity of federal government airports"
  ],
  "answer": 0,
  "explanation": "A CTAF is a frequency designated for carrying out airport advisory practices when operating to or from an airport that has no operating control tower. Selecting the correct common frequency is the key to monitoring traffic at such an airport.",
  "page": "65"
 },
 {
  "id": "s12-007",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "Which frequencies may serve as an airport's CTAF?",
  "choices": [
   "A UNICOM, MULTICOM, FSS, or tower frequency",
   "Only a UNICOM frequency assigned by the FAA",
   "An ATIS, AWOS, or approach control frequency",
   "Only a discrete frequency reserved for that single airport"
  ],
  "answer": 0,
  "explanation": "The CTAF may be a UNICOM, MULTICOM, FSS, or tower frequency, and it is identified in the appropriate aeronautical publications for the airport.",
  "page": "65"
 },
 {
  "id": "s12-008",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "What is UNICOM?",
  "choices": [
   "A nongovernment radio station that can give airport information where no tower or FSS operates",
   "A government-operated radio network that relays ATC clearances to pilots at non-towered fields",
   "An automated recording of weather and runway information that is updated every hour",
   "A satellite datalink service that delivers NOTAMs to aircraft while they are in flight"
  ],
  "answer": 0,
  "explanation": "UNICOM is a nongovernment air/ground radio communication station. It may provide airport information at public use airports that have neither a tower nor an FSS.",
  "page": "65"
 },
 {
  "id": "s12-009",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "At what altitude is the traffic pattern at a non-towered airport entered?",
  "choices": [
   "Always at pattern altitude",
   "At least 500 feet above pattern altitude",
   "Below pattern altitude, climbing on the downwind leg",
   "At any altitude, provided the pilot announces intentions"
  ],
  "answer": 0,
  "explanation": "Non-towered airport traffic patterns are always entered at pattern altitude. Only the way the pattern is joined varies, depending on the direction the aircraft arrives from.",
  "page": "65"
 },
 {
  "id": "s12-010",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "What is the preferred method for entering a non-towered airport's traffic pattern from the downwind side?",
  "choices": [
   "Approach on a course 45 degrees to the downwind leg and join at midfield",
   "Overfly the field above the pattern and descend directly onto the base leg",
   "Enter the upwind leg at the departure end of the runway and circle the field",
   "Join the final approach course straight in from several miles outside the pattern"
  ],
  "answer": 0,
  "explanation": "When arriving from the downwind side of the pattern, the preferred entry is to approach on a course 45 degrees to the downwind leg and join the pattern at midfield.",
  "page": "65"
 },
 {
  "id": "s12-011",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "Which publication provides the most comprehensive information about a given airport?",
  "choices": [
   "The Chart Supplement U.S.",
   "The sectional chart legend",
   "The NOTAMs for that airport",
   "The airport's ATIS broadcast"
  ],
  "answer": 0,
  "explanation": "The Chart Supplement U.S., formerly the Airport/Facility Directory, provides the most comprehensive information on a given airport, covering airports, heliports, and seaplane bases open to the public. The Legend Sample in the front of each volume explains how to decode the entries.",
  "page": "66"
 },
 {
  "id": "s12-012",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "How often is the Chart Supplement U.S. revised?",
  "choices": [
   "Every 56 days",
   "Every 28 days",
   "Every 6 months",
   "Once each year"
  ],
  "answer": 0,
  "explanation": "The Chart Supplement U.S. is published in seven books organized by region, and each is revised every 56 days. It is also available digitally on the FAA's website.",
  "page": "66"
 },
 {
  "id": "s12-013",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "What kind of information is distributed through the NOTAM system?",
  "choices": [
   "Time-critical information that is temporary or was not known in time to chart",
   "Permanent airspace boundaries and airway structures that appear on every chart revision",
   "Long-range weather outlooks intended for planning flights weeks in advance",
   "Routine airport service listings such as fuel availability and operating hours"
  ],
  "answer": 0,
  "explanation": "NOTAMs carry time-critical aeronautical information that is temporary in nature or was not known far enough in advance to publish on charts or in other publications. They include items like taxiway and runway closures, construction, and navigational aid status changes, and pilots should check them before any flight.",
  "page": "66"
 },
 {
  "id": "s12-014",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "What is the Automated Terminal Information Service (ATIS)?",
  "choices": [
   "A looped recording of local weather and other non-control information",
   "A live controller position that reads the current weather to each aircraft on request",
   "A datalink service that uploads flight plans directly into air traffic control computers",
   "An emergency broadcast system that activates only when an airport closes unexpectedly"
  ],
  "answer": 0,
  "explanation": "ATIS is a recording of the local weather conditions and other pertinent non-control information, broadcast on a local frequency in a looped format. It includes the runways in use, specific ATC procedures, and construction activity that could affect taxi planning.",
  "page": "67"
 },
 {
  "id": "s12-015",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "How often is an ATIS recording normally updated?",
  "choices": [
   "Once per hour, or more often when changing local conditions warrant",
   "Every 15 minutes around the clock, regardless of the local conditions",
   "Twice a day, once in the morning and once in the evening",
   "Only when the control tower opens or closes for the day"
  ],
  "answer": 0,
  "explanation": "ATIS is normally updated once per hour, and more often when changing local conditions warrant it. Each new recording gets the next phonetic code, so ATIS Alpha is replaced by Bravo, then Charlie, and so on down the alphabet.",
  "page": "67"
 },
 {
  "id": "s12-016",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "Which two aeronautical charts are used by VFR pilots?",
  "choices": [
   "Sectional charts and VFR Terminal Area charts",
   "Sectional charts and en route low altitude charts",
   "World Aeronautical Charts and approach plates",
   "VFR Terminal Area charts and airport taxi diagrams"
  ],
  "answer": 0,
  "explanation": "The two aeronautical charts used by VFR pilots are the sectional chart and the VFR Terminal Area chart. An aeronautical chart is the pilot's road map, showing airport data, navigational aids, airspace, and topography for the area of operation.",
  "page": "67"
 },
 {
  "id": "s12-017",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "What scale is used on sectional aeronautical charts?",
  "choices": [
   "1:500,000, where 1 inch represents about 6.86 nautical miles",
   "1:250,000, where 1 inch represents about 3.43 nautical miles",
   "1:1,000,000, where 1 inch represents about 13.7 nautical miles",
   "1:100,000, where 1 inch represents about 1.37 nautical miles"
  ],
  "answer": 0,
  "explanation": "Sectional charts, the most common charts pilots use, have a scale of 1:500,000, on which 1 inch equals 6.86 nautical miles or approximately 8 statute miles. That scale allows detailed information to be included on the chart.",
  "page": "67"
 },
 {
  "id": "s12-018",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "What do parallels of latitude measure?",
  "choices": [
   "Degrees north or south of the equator",
   "Degrees east or west of the Prime Meridian",
   "The angle between true north and magnetic north",
   "Angular height above the visible horizon"
  ],
  "answer": 0,
  "explanation": "Parallels of latitude are circles parallel to the equator, running east and west, and they measure degrees of latitude north or south of the equator. The angular distance from the equator to a pole is one-fourth of a circle, or 90 degrees, and the 48 conterminous states lie between 25 and 49 degrees north.",
  "page": "68"
 },
 {
  "id": "s12-019",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "What line serves as the zero reference for measuring longitude?",
  "choices": [
   "The Prime Meridian, which passes through Greenwich, England",
   "The equator, which lies equidistant from the two poles",
   "The agonic line, which connects points of zero variation",
   "The International Date Line, on the opposite side of the globe"
  ],
  "answer": 0,
  "explanation": "Meridians of longitude run from the North Pole to the South Pole at right angles to the equator. The Prime Meridian, passing through Greenwich, England, is the zero line, and longitude is measured from it in degrees east and west to 180 degrees.",
  "page": "68"
 },
 {
  "id": "s12-020",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "What is magnetic variation?",
  "choices": [
   "The angle between true north and magnetic north",
   "The compass error introduced during turns and acceleration",
   "The annual movement of the magnetic pole across the Arctic",
   "The difference between an aircraft's heading and its ground track"
  ],
  "answer": 0,
  "explanation": "Variation is the angle between true north and magnetic north, expressed as east or west variation depending on whether magnetic north lies east or west of true north. The exact amount varies by location because the Earth is not uniformly magnetized.",
  "page": "69"
 },
 {
  "id": "s12-021",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "How is magnetic variation depicted on most aeronautical charts?",
  "choices": [
   "As broken magenta isogonic lines connecting points of equal variation",
   "As solid blue arrows radiating outward from the position of the magnetic pole",
   "As shaded green bands covering the areas of strongest variation",
   "As numbered black circles printed beside each airport symbol"
  ],
  "answer": 0,
  "explanation": "Most aeronautical charts show the amount and direction of magnetic variation as broken magenta lines called isogonic lines, which connect points of equal variation. The line connecting points with no variation between true and magnetic north is the agonic line.",
  "page": "69"
 },
 {
  "id": "s12-022",
  "section": 12,
  "sectionName": "Airport Operations",
  "question": "How far horizontally should skeletal structures such as antenna towers be avoided, and why?",
  "choices": [
   "By at least 2,000 feet, because guy wires can reach about 1,500 feet outward",
   "By at least 500 feet, because that is the minimum distance charted for obstacles",
   "By at least 1,000 feet, because that matches the height of the tallest towers",
   "By at least 3 nautical miles, because tower positions on charts are approximate"
  ],
  "answer": 0,
  "explanation": "Most skeletal structures are held up by guy wires that can extend about 1,500 feet horizontally, are very difficult to see even in good weather, and can be invisible at dusk or in reduced visibility, so all skeletal structures should be avoided horizontally by at least 2,000 feet. Extreme caution is warranted below 2,000 feet AGL because many such towers exceed 1,000 feet AGL, some pass 2,000 feet, and new towers may not yet appear on the current chart.",
  "page": "70"
 },
 {
  "id": "s13-001",
  "section": 13,
  "sectionName": "Maintenance and Preflight",
  "question": "Which activity is included in small UAS maintenance?",
  "choices": [
   "Upgrading system software needed for flight",
   "Renewing the aircraft's FAA registration",
   "Completing the remote pilot's recurrent training",
   "Requesting airspace authorizations before a flight"
  ],
  "answer": 0,
  "explanation": "Small UAS maintenance covers scheduled and unscheduled overhaul, repair, inspection, modification, replacement, and system software upgrades of the aircraft and the components necessary for flight. Registration, pilot training, and authorizations are operating requirements, not maintenance.",
  "page": "7-1",
  "manual": "ac"
 },
 {
  "id": "s13-002",
  "section": 13,
  "sectionName": "Maintenance and Preflight",
  "question": "Whose instructions should be followed when maintaining a small UAS, whenever possible?",
  "choices": [
   "The manufacturer's",
   "An FAA-certificated mechanic's",
   "The local Flight Standards District Office's",
   "A part 145 repair station's"
  ],
  "answer": 0,
  "explanation": "Whenever possible, the operator should maintain the small UAS and its components in accordance with the manufacturer's instructions. If the manufacturer does not provide a maintenance program, the operator may develop one.",
  "page": "7-1",
  "manual": "ac"
 },
 {
  "id": "s13-003",
  "section": 13,
  "sectionName": "Maintenance and Preflight",
  "question": "On what basis may a manufacturer call for scheduled maintenance or replacement of small UAS components?",
  "choices": [
   "Time-in-service limits such as flight hours, cycles, or calendar-days",
   "The number of different pilots who have operated the aircraft",
   "Total miles flown since the last registration renewal",
   "Visual condition alone, as judged by the remote PIC during each preflight check"
  ],
  "answer": 0,
  "explanation": "The manufacturer may identify components that should undergo scheduled periodic maintenance or replacement based on time-in-service limits, such as flight hours, cycles, or calendar-days. Operators should adhere to that schedule to get the longest and safest service life from the aircraft.",
  "page": "7-1",
  "manual": "ac"
 },
 {
  "id": "s13-004",
  "section": 13,
  "sectionName": "Maintenance and Preflight",
  "question": "What should an operator do when the manufacturer provides no scheduled maintenance instructions?",
  "choices": [
   "Establish a protocol by documenting maintenance and component time in service",
   "Rely on preflight inspections alone, since no schedule is needed for small UAS",
   "Ground the aircraft until the manufacturer publishes an official schedule",
   "Adopt the maintenance schedule of a comparable manned aircraft type"
  ],
  "answer": 0,
  "explanation": "Without manufacturer instructions, the operator should establish their own scheduled maintenance protocol: document every repair, modification, overhaul, or replacement and record the component's time in service when the work is done. Over time those records let the operator build a reliable maintenance schedule.",
  "page": "7-1",
  "manual": "ac"
 },
 {
  "id": "s13-005",
  "section": 13,
  "sectionName": "Maintenance and Preflight",
  "question": "During preflight inspection, the remote PIC finds a component that needs repair. When may flight operations occur?",
  "choices": [
   "After the issue is corrected",
   "Immediately, if the flight remains within visual line of sight",
   "After the discrepancy has been reported to the FAA",
   "Within 24 hours, whether or not the repair is finished"
  ],
  "answer": 0,
  "explanation": "Finding a component that needs servicing, repair, modification, overhaul, or replacement during preflight is unscheduled maintenance, and flight operations should not occur until the issue is corrected. The same applies when a mishap causes damage or the manufacturer requires an unscheduled software update to fix a problem.",
  "page": "7-1",
  "manual": "ac"
 },
 {
  "id": "s13-006",
  "section": 13,
  "sectionName": "Maintenance and Preflight",
  "question": "What should be done with a small UAS component that cannot be repaired back to its safe operational specification?",
  "choices": [
   "Replace it with one that is in a condition for safe operation",
   "Placard it inoperative and continue flying the aircraft",
   "Offset the deficiency by reducing the aircraft's payload",
   "Log the defect and correct it at the next scheduled inspection"
  ],
  "answer": 0,
  "explanation": "If the operator or maintenance personnel cannot repair, modify, or overhaul a small UAS or component back to its safe operational specification, it should be replaced with one that is in a condition for safe operation. All required maintenance should be completed before each flight.",
  "page": "7-2",
  "manual": "ac"
 },
 {
  "id": "s13-007",
  "section": 13,
  "sectionName": "Maintenance and Preflight",
  "question": "How often must the remote PIC inspect the small UAS to ensure it is in a condition for safe operation?",
  "choices": [
   "Before each flight",
   "Once every calendar-month",
   "Every 100 hours of flight time",
   "Only after maintenance has been performed"
  ],
  "answer": 0,
  "explanation": "The remote PIC must inspect the small UAS prior to each flight, checking for equipment damage or malfunction. The inspection should follow the manufacturer's inspection procedures when available, or a procedure the owner or operator has developed.",
  "page": "7-2",
  "manual": "ac"
 },
 {
  "id": "s13-008",
  "section": 13,
  "sectionName": "Maintenance and Preflight",
  "question": "How can part 43 appendix D help a small UAS operator who lacks manufacturer inspection instructions?",
  "choices": [
   "As a guide for an inspection program, though it omits UAS items like datalinks",
   "As a complete inspection checklist that needs no additions for a small UAS",
   "As a mandatory inspection standard that every small UAS operator must follow",
   "As a replacement for the manufacturer's maintenance program in every situation"
  ],
  "answer": 0,
  "explanation": "Part 43 appendix D offers a logical, systematic inspection approach that divides the aircraft into subgroups, and an operator may use it as a guide to develop an inspection program. It is optional and not comprehensive: it does not address unique UAS features such as datalinks or support equipment, so the operator must identify and add those items.",
  "page": "7-2",
  "manual": "ac"
 },
 {
  "id": "s13-009",
  "section": 13,
  "sectionName": "Maintenance and Preflight",
  "question": "Which check does the FAA recommend as part of a small UAS preflight inspection?",
  "choices": [
   "Starting the propellers to look for imbalance or irregular operation",
   "Weighing the fully loaded aircraft on a calibrated scale before every launch",
   "Fully discharging and recharging the batteries between flights",
   "Disassembling the airframe to examine the internal wiring"
  ],
  "answer": 0,
  "explanation": "The recommended preflight items include a visual condition check of the components, legible registration markings, secure attachment of equipment such as cameras, established control link and GPS acquisition from the manufacturer's minimum satellite count, adequate power for the aircraft and control station, and starting the propellers to inspect for imbalance or irregular operation before rechecking controls at a controlled low altitude.",
  "page": "7-3",
  "manual": "ac"
 },
 {
  "id": "s13-010",
  "section": 13,
  "sectionName": "Maintenance and Preflight",
  "question": "What is a benefit of keeping maintenance and inspection records for a small UAS?",
  "choices": [
   "It helps establish a reliable maintenance schedule and track component service life",
   "It exempts the operator from having to perform a preflight inspection before each flight",
   "It qualifies the aircraft to receive an FAA airworthiness certificate",
   "It automatically extends the manufacturer's warranty on flight components"
  ],
  "answer": 0,
  "explanation": "Documenting repairs, modifications, overhauls, and replacements along with component time in service lets an operator establish a reliable maintenance schedule and track component service life. A hardcopy or electronic logbook covering all components, including the control station, launch and recovery equipment, C2 link, and payload, provides retrievable evidence that the aircraft is in a condition for safe flight.",
  "page": "7-4",
  "manual": "ac"
 },
 {
  "id": "s14-001",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "For small UAS operations, when does night begin and end?",
  "choices": [
   "It runs from the end of evening civil twilight to the beginning of morning civil twilight",
   "It runs from the moment of sunset to the moment of sunrise at the operating location",
   "It runs from one hour after sunset to one hour before sunrise, converted to local time",
   "It runs from 30 minutes before sunset to 30 minutes after sunrise at the operating location"
  ],
  "answer": 0,
  "explanation": "Night is the time between the end of evening civil twilight and the beginning of morning civil twilight, as published in The Air Almanac and converted to local time. Sunset and sunrise themselves mark the start of the twilight periods, not the start of night.",
  "page": "5-4",
  "manual": "ac"
 },
 {
  "id": "s14-002",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "In the continental United States, evening civil twilight lasts from sunset until how long after sunset?",
  "choices": [
   "30 minutes",
   "15 minutes",
   "45 minutes",
   "60 minutes"
  ],
  "answer": 0,
  "explanation": "In the continental United States, evening civil twilight is the period from sunset until 30 minutes after sunset, and morning civil twilight is the 30 minutes before sunrise. Alaska uses a different definition found in The Air Almanac.",
  "page": "5-4",
  "manual": "ac"
 },
 {
  "id": "s14-003",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "A small unmanned aircraft flown during civil twilight must have anti-collision lighting visible for at least what distance?",
  "choices": [
   "3 statute miles",
   "1 statute mile",
   "5 statute miles",
   "3 nautical miles"
  ],
  "answer": 0,
  "explanation": "During civil twilight the aircraft must carry anti-collision lighting visible for at least 3 statute miles. The remote PIC may reduce the visible distance during flight only after determining the reduction is in the interest of safety.",
  "page": "5-4",
  "manual": "ac"
 },
 {
  "id": "s14-004",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "A certificated remote pilot earns night operations privileges by completing recurrent training or an initial knowledge test that covers which topics?",
  "choices": [
   "Night physiology and night visual illusions",
   "Airport beacon colors and light gun signals",
   "Instrument scanning and night navigation aids",
   "Anti-collision light maintenance and inspection"
  ],
  "answer": 0,
  "explanation": "Night privileges come only after completing either a knowledge test containing questions on night physiology and night visual illusions, or recurrent training covering those same topics. Either path satisfies the training prerequisite in section 107.29.",
  "page": "5-4",
  "manual": "ac"
 },
 {
  "id": "s14-005",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "May a remote pilot rely on a manufacturer's statement that the anti-collision lighting on a small UA is visible for 3 statute miles?",
  "choices": [
   "Yes, but the pilot remains responsible for verifying the lighting works, is visible for 3 sm, and flashes fast enough to avoid a collision",
   "No, the pilot must personally measure the visible distance of the lighting at the operating location before every single night flight",
   "Yes, and the manufacturer's statement fully transfers responsibility for the lighting's performance to the manufacturer",
   "No, only an FAA inspection of the installed lighting can establish that the aircraft meets the night lighting requirement"
  ],
  "answer": 0,
  "explanation": "The pilot may rely on manufacturer statements that the lighting is visible for 3 statute miles, but ultimately remains responsible for verifying the anti-collision lighting is operational, visible for 3 sm, and has a flash rate sufficient to avoid a collision at the operating location.",
  "page": "5-4",
  "manual": "ac"
 },
 {
  "id": "s14-006",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "During a night operation, when may the remote PIC reduce the intensity of the aircraft's anti-collision lighting?",
  "choices": [
   "When the remote PIC determines the reduction is in the interest of safety",
   "Never, since the lighting must remain at full intensity throughout any night flight",
   "Only after the FAA has issued a Certificate of Waiver for reduced lighting",
   "Whenever the aircraft is operating within 400 feet of the remote PIC's position"
  ],
  "answer": 0,
  "explanation": "The remote PIC has discretion to reduce the intensity of the anti-collision lighting when doing so is in the interest of safety, for example when a bright strobe very close to the pilot makes it hard to judge the aircraft's location, speed, attitude, or altitude.",
  "page": "5-5",
  "manual": "ac"
 },
 {
  "id": "s14-007",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "Does section 107.29 require anti-collision lighting to be illuminated during daytime small UAS operations?",
  "choices": [
   "No, because lighting is generally not effective at reducing collision risk in daylight, although pilots may elect to use it",
   "Yes, anti-collision lighting must be illuminated during every flight conducted under Part 107 regardless of the time of day",
   "Yes, but only when the daytime operation takes place inside controlled airspace or within an FAA-recognized identification area",
   "No, and the regulation prohibits switching anti-collision lighting on during daylight to avoid distracting other pilots"
  ],
  "answer": 0,
  "explanation": "Section 107.29 does not require illuminated anti-collision lighting for daytime operations because lighting generally does not mitigate collision risk in daylight. Remote pilots may still exercise their discretion and leave the lighting on during the day.",
  "page": "5-5",
  "manual": "ac"
 },
 {
  "id": "s14-008",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "How do the category rules for operations over people change when the flight takes place at night?",
  "choices": [
   "They do not change; the same categories and restrictions apply day and night",
   "Only Category 4 aircraft are permitted to fly over people during night hours",
   "Each category's weight limit is reduced by half for operations after dark",
   "Operations over people at night are prohibited unless a waiver has been issued"
  ],
  "answer": 0,
  "explanation": "The categories and their restrictions for operations over people do not change at night. An aircraft eligible for any category may be flown over people at night as long as the operation also meets the night requirements of section 107.29, and manufacturers declaring Category 2 or 3 eligibility will likely need to account for the mass of an anti-collision light.",
  "page": "8-36",
  "manual": "ac"
 },
 {
  "id": "s14-009",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "After September 16, 2023, which small unmanned aircraft must comply with remote identification requirements?",
  "choices": [
   "Most aircraft that are registered or required to be registered",
   "Only aircraft that weigh more than 55 pounds at takeoff",
   "Only aircraft that are flown beyond the pilot's visual line of sight",
   "Only aircraft manufactured after that compliance date"
  ],
  "answer": 0,
  "explanation": "After September 16, 2023, most small unmanned aircraft that are registered or required to be registered must comply with remote identification. Even aircraft under 0.55 pounds that escape registration must comply when flown under an operating part that requires registration, such as Part 107.",
  "page": "5-14",
  "manual": "ac"
 },
 {
  "id": "s14-010",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "On how many Certificates of Aircraft Registration may a remote identification serial number be listed at any one time?",
  "choices": [
   "One",
   "Two",
   "Five",
   "Any number, as long as every aircraft has the same owner"
  ],
  "answer": 0,
  "explanation": "The serial number of a standard remote identification aircraft, or of an installed broadcast module, must be listed on the Certificate of Aircraft Registration, and it may appear on only one certificate at a time.",
  "page": "5-14",
  "manual": "ac"
 },
 {
  "id": "s14-011",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "What must happen before a remote ID broadcast module that was moved from one Part 107 aircraft to another is flown on the second aircraft?",
  "choices": [
   "The module's serial number must be moved to the second aircraft's Certificate of Aircraft Registration",
   "The module must be returned to its manufacturer for recalibration and a new compliance sticker",
   "A new declaration of compliance for the second aircraft must be accepted by the FAA",
   "The first aircraft's Certificate of Aircraft Registration must be permanently canceled"
  ],
  "answer": 0,
  "explanation": "A broadcast module may be moved between aircraft operated under Part 107, but before the second aircraft flies, the module's serial number must be moved from the first aircraft's Certificate of Aircraft Registration to the second aircraft's certificate.",
  "page": "5-14",
  "manual": "ac"
 },
 {
  "id": "s14-012",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "Which location information does a standard remote identification aircraft broadcast?",
  "choices": [
   "The latitude, longitude, and geometric altitude of both the control station and the aircraft",
   "The aircraft's position and the takeoff location, but never the control station's position",
   "Only the aircraft's own position, since the control station location is kept confidential",
   "The control station's latitude and longitude only, transmitted once per minute over RF spectrum"
  ],
  "answer": 0,
  "explanation": "A standard remote identification aircraft broadcasts the latitude, longitude, and geometric altitude of both the control station and the aircraft, along with the aircraft identification, its velocity, a time mark, and an emergency status code. Broadcasting the takeoff location instead of the control station is what a broadcast module does.",
  "page": "5-14",
  "manual": "ac"
 },
 {
  "id": "s14-013",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "A small UA that is not a standard remote identification aircraft may be operated either with a remote ID broadcast module or in what other way?",
  "choices": [
   "Within an FAA-recognized identification area (FRIA)",
   "Under a flight plan filed with ATC before each launch",
   "At or below 200 feet AGL for the entire operation",
   "Under a Certificate of Waiver issued for remote ID"
  ],
  "answer": 0,
  "explanation": "An aircraft without standard remote identification has two options: equip it with a remote identification broadcast module, or operate it within visual line of sight inside an FAA-recognized identification area (FRIA), regardless of which operating part governs the flight.",
  "page": "5-14",
  "manual": "ac"
 },
 {
  "id": "s14-014",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "What operating limitation applies specifically to a small UA that relies on a remote ID broadcast module?",
  "choices": [
   "It must be operated within visual line of sight",
   "It must remain inside an FAA-recognized identification area",
   "It may be flown only during daylight and civil twilight",
   "It must remain within 400 feet of the control station"
  ],
  "answer": 0,
  "explanation": "A small unmanned aircraft using a remote identification broadcast module must be operated within visual line of sight. The module may be integrated by the manufacturer or be a standalone unit the user secures to the aircraft before takeoff.",
  "page": "5-15",
  "manual": "ac"
 },
 {
  "id": "s14-015",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "Instead of the control station's position, a remote ID broadcast module transmits the latitude, longitude, and geometric altitude of what point?",
  "choices": [
   "The takeoff location",
   "The nearest public airport",
   "The planned landing location",
   "The pilot's registered address"
  ],
  "answer": 0,
  "explanation": "A broadcast module transmits the aircraft identification and serial number, the aircraft's position and velocity, a time mark, and the latitude, longitude, and geometric altitude of the takeoff location. A standard remote ID aircraft broadcasts the control station's position instead.",
  "page": "5-15",
  "manual": "ac"
 },
 {
  "id": "s14-016",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "What is the maximum weight of a small unmanned aircraft in a Category 1 operation over people?",
  "choices": [
   "0.55 pounds, including everything on board or attached to the aircraft",
   "0.55 pounds, excluding batteries and any payload attached to the aircraft",
   "4.4 pounds, including everything on board or attached to the aircraft",
   "55 pounds, the same weight limit that applies to Part 107 generally"
  ],
  "answer": 0,
  "explanation": "Category 1 is limited to a maximum weight of 0.55 pounds, counting everything on board or otherwise attached to the aircraft at takeoff and throughout the operation. Nothing is excluded from the total, so batteries and payloads count.",
  "page": "8-1",
  "manual": "ac"
 },
 {
  "id": "s14-017",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "Besides the 0.55 pound (250 gram) weight limit, what design requirement must a Category 1 small unmanned aircraft meet?",
  "choices": [
   "It must have no exposed rotating parts that would lacerate human skin upon impact",
   "It must have every rotating part fully enclosed in a metal guard approved by the FAA",
   "It must be listed on an FAA-accepted declaration of compliance for Category 1",
   "It must hold an airworthiness certificate issued by the FAA under part 21"
  ],
  "answer": 0,
  "explanation": "A Category 1 aircraft must not contain any exposed rotating parts that would lacerate human skin on impact. The remote pilot is responsible for confirming both the weight and the rotating-parts condition; no declaration of compliance or airworthiness certificate is involved, and there are no applicant requirements for Category 1.",
  "page": "8-3",
  "manual": "ac"
 },
 {
  "id": "s14-018",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "Over which people may a small unmanned aircraft fly without the operation qualifying under one of the four categories?",
  "choices": [
   "Direct participants such as the remote PIC, the person manipulating the controls, a VO, or crewmembers needed for safety",
   "Anyone who has signed a written liability waiver acknowledging that a small unmanned aircraft may pass overhead",
   "Anyone attending an event that the remote pilot has been hired to photograph, once the event organizer approves the flight",
   "Anyone standing within 100 feet of the launch point who received a verbal safety briefing before the aircraft took off"
  ],
  "answer": 0,
  "explanation": "Section 107.39 allows flight over people directly participating in the operation: the remote PIC, a person manipulating the controls, a visual observer, or crewmembers necessary for the safety of the operation. The remote pilot assigns and briefs these direct participants; everyone else must be under safe cover or covered by one of the four categories.",
  "page": "8-1",
  "manual": "ac"
 },
 {
  "id": "s14-019",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "What qualifies as safe cover for a person beneath a small unmanned aircraft operation?",
  "choices": [
   "A structure or stationary vehicle that would protect the person if the aircraft struck it",
   "Any vehicle that the person occupies, whether the vehicle is parked or moving at the time",
   "A tree canopy or other dense natural vegetation directly above the person",
   "An umbrella or similar handheld object the person holds overhead"
  ],
  "answer": 0,
  "explanation": "Safe cover is a structure or stationary vehicle that protects a person from harm if the small unmanned aircraft impacts it. People under safe cover may be overflown without the operation meeting one of the four categories; a moving vehicle does not count.",
  "page": "8-1",
  "manual": "ac"
 },
 {
  "id": "s14-020",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "What minimum stand-off distance from nonparticipating people does Part 107 impose on small UAS operations?",
  "choices": [
   "None; the rule sets no specific distance, though the pilot may choose to observe one",
   "25 feet horizontally from any person who is not participating in the flight operation",
   "100 feet horizontally and 50 feet vertically from all nonparticipating people",
   "500 feet in all directions, matching the distance required of manned aircraft"
  ],
  "answer": 0,
  "explanation": "Part 107 does not impose a specific stand-off distance from people. The remote pilot may elect a minimum distance based on the aircraft's performance, environmental and operational-area conditions, probable failures, and the pilot's own ability to maneuver the aircraft, adjusting it as conditions change.",
  "page": "8-2",
  "manual": "ac"
 },
 {
  "id": "s14-021",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "Under what condition may a Category 1, 2, or 4 operation include sustained flight over an open-air assembly of people?",
  "choices": [
   "When the operation meets the remote identification requirements of section 89.110 or 89.115(a)",
   "When the organizer of the assembly has given the remote pilot written permission for the flight",
   "When the aircraft remains at least 400 feet above the highest person in the assembled crowd",
   "When a visual observer is stationed inside the assembly to watch the aircraft at all times"
  ],
  "answer": 0,
  "explanation": "Sustained flight over an open-air assembly in a Category 1, 2, or 4 operation is prohibited unless the operation meets the remote identification requirements of section 89.110 or 89.115(a). This prohibition is subject to waiver. A brief, one-time transit that is merely incidental to a point-to-point operation unrelated to the assembly is not sustained flight.",
  "page": "8-2",
  "manual": "ac"
 },
 {
  "id": "s14-022",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "Which document must accompany a small unmanned aircraft that is eligible for Category 2 or Category 3 operations over people?",
  "choices": [
   "Current remote pilot operating instructions that apply to the operation of the aircraft",
   "An FAA-approved Flight Manual containing the aircraft's approved operating limitations",
   "A maintenance logbook kept in accordance with the requirements of part 43",
   "A Certificate of Waiver specifically authorizing flight over human beings"
  ],
  "answer": 0,
  "explanation": "Aircraft eligible for Category 2 or 3 must have current remote pilot operating instructions, which the FAA anticipates will help the remote pilot conduct the preflight check and confirm the aircraft is in a condition for safe operation. An FAA-approved Flight Manual is a Category 4 feature.",
  "page": "8-35",
  "manual": "ac"
 },
 {
  "id": "s14-023",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "Which category of operations over people is never permitted over an open-air assembly of persons?",
  "choices": [
   "Category 3",
   "Category 1",
   "Category 2",
   "Category 4"
  ],
  "answer": 0,
  "explanation": "Category 3 operations are not allowed over an open-air assembly of persons at all. Categories 1, 2, and 4 are barred only from sustained flight over such assemblies, and that bar lifts when the operation meets section 89.110 or 89.115(a).",
  "page": "8-2",
  "manual": "ac"
 },
 {
  "id": "s14-024",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "A Category 2 aircraft is flown over people inside moving vehicles at a closed-access site. What does Part 107 require regarding those vehicle occupants?",
  "choices": [
   "Anyone inside a moving vehicle within the site must be on notice that a small UA may fly over them",
   "Every vehicle inside the site must come to a complete stop while the aircraft passes overhead",
   "All vehicle occupants inside the site must be enrolled as direct participants in the flight operation",
   "Vehicles inside the site must keep their speed below 25 miles per hour during the entire operation"
  ],
  "answer": 0,
  "explanation": "For Category 1, 2, and 3 aircraft, operations over people in moving vehicles must be conducted within or over a closed- or restricted-access site, and any person inside a moving vehicle within that site must be on notice that a small unmanned aircraft may fly over them.",
  "page": "8-2",
  "manual": "ac"
 },
 {
  "id": "s14-025",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "When a Category 1, 2, or 3 operation over moving vehicles is NOT conducted at a closed- or restricted-access site, what restriction applies?",
  "choices": [
   "The aircraft must not maintain sustained flight over any moving vehicle",
   "The aircraft must stay at least 100 feet above the surface of the roadway",
   "The aircraft may cross only divided highways with a posted speed limit",
   "The operation is prohibited entirely without a Certificate of Waiver"
  ],
  "answer": 0,
  "explanation": "Outside a closed- or restricted-access site, a Category 1, 2, or 3 aircraft may transit over moving vehicles but must not maintain sustained flight over any moving vehicle. Category 4 aircraft instead follow the operating limitations in their FAA-approved Flight Manual.",
  "page": "8-3",
  "manual": "ac"
 },
 {
  "id": "s14-026",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "How does a remote pilot confirm that a small unmanned aircraft is eligible for Category 2 operations over people?",
  "choices": [
   "Check online that its declaration of compliance is valid and inspect the aircraft for an affixed Category 2 label",
   "Weigh the aircraft to confirm it is under 0.55 pounds and inspect it for exposed rotating parts on the airframe",
   "Review the aircraft's part 21 airworthiness certificate and the limitations in its FAA-approved Flight Manual",
   "Verify the aircraft's serial number appears on its Certificate of Aircraft Registration and in the FAA registry"
  ],
  "answer": 0,
  "explanation": "The remote pilot must ensure the aircraft is listed on an FAA-accepted declaration of compliance as eligible for Category 2 and is labeled accordingly. That means checking online at uasdoc.faa.gov that the DOC is valid and visually inspecting the aircraft for the affixed Category 2 label. These duties are in addition to the normal preflight responsibilities of section 107.49.",
  "page": "8-4",
  "manual": "ac"
 },
 {
  "id": "s14-027",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "Outside a closed- or restricted-access site, a Category 3 aircraft may not sustain flight over any person unless that person meets what condition?",
  "choices": [
   "The person is directly participating in the operation, or is under a covered structure or inside a stationary vehicle that offers reasonable protection",
   "The person is standing inside a marked safety zone that the remote pilot announced over a loudspeaker before the aircraft took off for the operation",
   "The person is aware of the flight and has verbally consented to the aircraft passing overhead for the full duration of the planned operation",
   "The person remains more than 50 feet from the aircraft's planned flightpath as measured by the remote pilot at the start of the operation"
  ],
  "answer": 0,
  "explanation": "Outside a closed- or restricted-access site, a Category 3 operation may not sustain flight over anyone except a direct participant or a person located under a covered structure or inside a stationary vehicle that can provide reasonable protection from a falling small unmanned aircraft.",
  "page": "8-5",
  "manual": "ac"
 },
 {
  "id": "s14-028",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "Which of the following would the FAA most likely treat as an open-air assembly of persons?",
  "choices": [
   "Spectators gathered at a concert venue or sporting event",
   "A family walking out of a shopping center to its parked car",
   "Individuals riding bicycles spread out along a bike path",
   "A few people playing casual sports in an open area with no spectators"
  ],
  "answer": 0,
  "explanation": "Open-air assembly is judged case by case based on the density of nonparticipating people and the size of the area. Likely examples include sporting events, concerts, parades, protests, political rallies, community festivals, and parks or beaches during certain events. Individuals or small groups, such as a family leaving a shopping center or people biking along a path, are less likely to qualify.",
  "page": "8-5",
  "manual": "ac"
 },
 {
  "id": "s14-029",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "Which maneuver counts as sustained flight over a person who is not involved in the operation?",
  "choices": [
   "Circling above the person so the aircraft stays over some part of them",
   "Crossing over the person a single time while transiting to a distant worksite",
   "Flying a straight line that passes close to the person but never above them",
   "Hovering in place roughly 100 feet to one side of where the person stands"
  ],
  "answer": 0,
  "explanation": "Sustained flight includes hovering above a person's head, flying back and forth over a person, or circling above the person so the aircraft remains over some part of them. The intent of the rule is to allow only momentary exposure, so the pilot should adjust the flightpath to minimize time over people or discontinue the operation.",
  "page": "8-6",
  "manual": "ac"
 },
 {
  "id": "s14-030",
  "section": 14,
  "sectionName": "Night, Over People, and Remote ID",
  "question": "What must a small unmanned aircraft hold to be eligible for Category 4 operations over people?",
  "choices": [
   "An airworthiness certificate issued by the FAA under part 21",
   "A declaration of compliance accepted and listed by the FAA",
   "A gross takeoff weight of no more than 0.55 pounds",
   "A remote identification broadcast module secured before takeoff"
  ],
  "answer": 0,
  "explanation": "Category 4 aircraft must have an FAA-issued airworthiness certificate under part 21 and be operated within the limitations of the FAA-approved Flight Manual or as otherwise specified by the Administrator. A declaration of compliance is the eligibility path for Categories 2 and 3, not Category 4.",
  "page": "8-6",
  "manual": "ac"
 }
];
