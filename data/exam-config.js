/* Everything that names the exam this trainer studies for: the FAA remote
   pilot knowledge test and recurrent training behind it, the pass mark, the
   FAA publication links, and the prose that mentions Part 107. The engine
   under js/ reads only this file and data/questions.js, so a trainer for a
   different exam is built by replacing the data/ directory and the page
   shell (index.html, manifest.webmanifest, icons, CNAME); js/ carries no
   knowledge of any particular exam.
   Loads after data/questions.js and data/manual-pages.js and may read both. */
const EXAM_CONFIG = {
  storageKey: 'faa-drone-trainer-v1',      // localStorage; changing it orphans saved progress
  sessionKey: 'faa-drone-trainer-session', // sessionStorage mirror of the active session
  exportPrefix: 'faa-drone-progress',      // backup filename: <prefix>-YYYY-MM-DD.json
  repo: 'https://github.com/ullbergm/faa-drone-trainer',
  passMark: 0.7, // the FAA passes the UAG knowledge test at 70% (42 of 60)

  // Section numbers are exam topics, not chapters of one book: a section can
  // hold questions citing either FAA publication, and `manual` says only
  // where the citation points. Sections read as "§ N" in the UI.
  flatSections: true,
  sectionWord: '§',

  // Manuals the questions cite. A question picks one with its `manual` field
  // and uses `default` when it has none. The study guide is the FAA's own
  // prep text for the test but dates from 2016; AC 107-2A carries the rules
  // added since (night operations, operations over people, remote ID) and
  // the current registration, certification, and waiver procedures.
  requireCitations: true, // the bank validator rejects a question without a page
  manuals: {
    default: {
      title: 'Remote Pilot Study Guide (FAA-G-8082-22)',
      cite: 'Guide',
      url: 'https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/remote_pilot_study_guide.pdf',
      pages: MANUAL_PAGES.sg,
    },
    ac: {
      title: 'AC 107-2A, Small Unmanned Aircraft Systems',
      cite: 'AC 107-2A',
      url: 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_107-2A.pdf',
      pages: MANUAL_PAGES.ac,
    },
  },

  // Mock exams sized like the real assessments. The initial knowledge test
  // asks 60 questions in 120 minutes; the recurrent training course ends in
  // a 45-question knowledge check over a narrower set of topics (weather,
  // loading, performance, radio, and physiology are initial-only).
  exams: [
    { key: 'initial', name: 'Part 107 Initial Knowledge Test', sections: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14], count: 60 },
    { key: 'recurrent', name: 'Part 107 Recurrent Knowledge Check', sections: [1, 2, 6, 11, 12, 13, 14], count: 45 },
    // Part 108 (beyond visual line of sight) is still a proposed rule with no
    // test to study for. When the FAA finalizes it and publishes testable
    // material, add its sections to the bank and list the exam here.
  ],

  // Certificates and currency -> the sections that cover them.
  // The Settings picker offers these, grouped by testGroups.
  tests: [
    { key: 'initial', group: 'cert', name: 'Part 107 Initial Knowledge Test (UAG)', note: 'the proctored test that earns the remote pilot certificate', sections: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14] },
    { key: 'recurrent', group: 'cert', name: 'Part 107 Recurrent Training (ALC-677)', note: 'free online course due every 24 calendar months', sections: [1, 2, 6, 11, 12, 13, 14] },
    // { key: 'part108', group: 'future', name: 'Part 108 (BVLOS)', note: 'proposed rule, not yet testable', sections: [] },
  ],
  testGroups: [
    ['cert', 'Remote pilot certificate'],
    // ['future', 'Coming rules'],
  ],

  // Prose that names the exam, injected as HTML into the matching views.
  homeSubtitle: `${QUESTION_BANK.length} questions from the FAA Remote Pilot Study Guide and AC 107-2A`,
  disclaimerHTML: `Questions were written from the FAA's
    <a href="https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/remote_pilot_study_guide.pdf"
       target="_blank" rel="noopener">Remote Pilot Study Guide</a> and
    <a href="https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_107-2A.pdf"
       target="_blank" rel="noopener">AC 107-2A</a>;
    accuracy is not guaranteed. Each question links to the page it came from, so verify
    anything important against the source. The actual FAA test questions are not public, and no
    claim is made that these match or resemble them. All progress is stored locally in
    your browser and never sent to a server.`,
  aboutIntroHTML: `<p>FAA Drone Trainer is a free, open-source study tool for the FAA Part 107
    remote pilot knowledge test and the recurrent training knowledge check. Its
    ${QUESTION_BANK.length} questions were written from the FAA's
    <a href="https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/remote_pilot_study_guide.pdf"
       target="_blank" rel="noopener">Remote Pilot Study Guide (FAA-G-8082-22)</a>
    and <a href="https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_107-2A.pdf"
       target="_blank" rel="noopener">AC 107-2A</a>, which covers the rules added after the
    study guide was published: night operations, operations over people, and remote
    identification. Every question cites the page it came from, and the citation is a link
    that opens the PDF at that page.</p>`,
  aboutCaveatHTML: `<p>Questions were written from the FAA publications by a language model and
    reviewed for accuracy, but mistakes are possible and accuracy is not guaranteed. The real
    test shows three choices per question; this trainer shows four, which is slightly harder.
    Questions on the real test that read a sectional chart or other figure from the testing
    supplement are not represented here, since this trainer renders text only; practice chart
    reading separately before test day. Part 108, the proposed rule for flying beyond visual
    line of sight, has no test to study for yet; when the FAA finalizes it, this trainer will
    grow a section for it.</p>`,
};
