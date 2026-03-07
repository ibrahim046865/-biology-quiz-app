const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const welcomeMsg = document.getElementById('welcome-message');
const questBox = document.getElementById('question-container');
const currentDiv = document.getElementById('current');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score-display');
const questionNumberDisplay = document.getElementById('question-number');
const quizHeader = document.getElementsByTagName('h1')[0];
const congMsg = document.getElementById('congMsg');
const controlButtons = document.getElementById('restart-control');
const score = document.getElementById('score');
const percentage = document.getElementById('percentage');
const restartBtn = document.getElementById('restart-btn');
nextButton.disabled = true;


const questions = [
  {
    question: "Which process is responsible for the movement of manufactured food in plants?",
    choices: ["Transpiration", "Photosynthesis", "Translocation", "Respiration"],
    answer: "Translocation"
  },
  {
    question: "A cross between two heterozygous tall plants (Tt × Tt) will produce what phenotypic ratio?",
    choices: ["1:1", "3:1", "1:2:1", "2:1"],
    answer: "3:1"
  },
  {
    question: "Which organ removes excess glucose from the blood and converts it to glycogen?",
    choices: ["Kidney", "Pancreas", "Liver", "Spleen"],
    answer: "Liver"
  },
  {
    question: "Which structure prevents food from entering the trachea during swallowing?",
    choices: ["Larynx", "Epiglottis", "Glottis", "Pharynx"],
    answer: "Epiglottis"
  },
  {
    question: "The exchange of respiratory gases in humans takes place in the?",
    choices: ["Bronchi", "Alveoli", "Trachea", "Larynx"],
    answer: "Alveoli"
  },
  {
    question: "Which nitrogenous waste product is excreted by mammals?",
    choices: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
    answer: "Urea"
  },
  {
    question: "Which class of food is mainly responsible for growth and repair of tissues?",
    choices: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
    answer: "Proteins"
  },
  {
    question: "The separation of blood cells from plasma is done by?",
    choices: ["Diffusion", "Osmosis", "Centrifugation", "Filtration"],
    answer: "Centrifugation"
  },
  {
    question: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
    choices: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
    answer: "Pulmonary vein"
  },
  {
    question: "The site of protein digestion in humans is the?",
    choices: ["Mouth", "Stomach", "Ileum", "Large intestine"],
    answer: "Stomach"
  },

  {
    question: "Which organism can carry out both photosynthesis and respiration?",
    choices: ["Virus", "Green plant", "Fungi", "Animal"],
    answer: "Green plant"
  },
  {
    question: "The functional unit of the nervous system is the?",
    choices: ["Brain", "Neuron", "Spinal cord", "Axon"],
    answer: "Neuron"
  },
  {
    question: "Which type of skeleton is found in insects?",
    choices: ["Hydrostatic skeleton", "Endoskeleton", "Cartilaginous skeleton", "Exoskeleton"],
    answer: "Exoskeleton"
  },
  {
    question: "Which enzyme converts starch to maltose?",
    choices: ["Pepsin", "Trypsin", "Amylase", "Lipase"],
    answer: "Amylase"
  },
  {
    question: "The smallest blood vessels in the human body are called?",
    choices: ["Veins", "Arteries", "Capillaries", "Venules"],
    answer: "Capillaries"
  },
  {
    question: "Which process leads to loss of water vapour from plant leaves?",
    choices: ["Respiration", "Transpiration", "Photosynthesis", "Guttation"],
    answer: "Transpiration"
  },
  {
    question: "Which part of the brain controls involuntary actions like breathing?",
    choices: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
    answer: "Medulla oblongata"
  },
  {
    question: "Which structure connects the fetus to the placenta?",
    choices: ["Amnion", "Umbilical cord", "Chorion", "Oviduct"],
    answer: "Umbilical cord"
  },
  {
    question: "Which of the following is NOT a function of the skeleton?",
    choices: ["Protection", "Support", "Movement", "Digestion"],
    answer: "Digestion"
  },
  {
    question: "Which plant tissue is responsible for water transport?",
    choices: ["Phloem", "Cambium", "Xylem", "Cortex"],
    answer: "Xylem"
  },

  {
    question: "Which process results in variation among offspring?",
    choices: ["Mitosis", "Binary fission", "Meiosis", "Budding"],
    answer: "Meiosis"
  },
  {
    question: "A dominant allele is one that?",
    choices: [
      "Only appears in homozygous form",
      "Is always harmful",
      "Expresses itself in heterozygous condition",
      "Disappears after one generation"
    ],
    answer: "Expresses itself in heterozygous condition"
  },
  {
    question: "Which organ is responsible for detoxification in mammals?",
    choices: ["Kidney", "Heart", "Liver", "Lung"],
    answer: "Liver"
  },
  {
    question: "Which structure in the eye controls the amount of light entering?",
    choices: ["Lens", "Retina", "Pupil", "Cornea"],
    answer: "Pupil"
  },
  {
    question: "Which disease is caused by deficiency of vitamin D?",
    choices: ["Scurvy", "Rickets", "Beriberi", "Pellagra"],
    answer: "Rickets"
  },
  {
    question: "Which type of nutrition is exhibited by fungi?",
    choices: ["Autotrophic", "Holozoic", "Saprophytic", "Parasitic"],
    answer: "Saprophytic"
  },
  {
    question: "Which chamber of the heart pumps blood to the body?",
    choices: ["Left atrium", "Right atrium", "Left ventricle", "Right ventricle"],
    answer: "Left ventricle"
  },
  {
    question: "Which process involves the release of energy from food?",
    choices: ["Photosynthesis", "Respiration", "Transpiration", "Excretion"],
    answer: "Respiration"
  },
  {
    question: "Which structure in plants allows gaseous exchange?",
    choices: ["Root hair", "Lenticel", "Xylem", "Phloem"],
    answer: "Lenticel"
  },
  {
    question: "Which component of blood transports oxygen?",
    choices: ["Plasma", "Platelets", "White blood cells", "Red blood cells"],
    answer: "Red blood cells"
  },

  {
    question: "Which group of organisms shows alternation of generations?",
    choices: ["Mammals", "Birds", "Ferns", "Reptiles"],
    answer: "Ferns"
  },
  {
    question: "The inability of an organism to regulate body temperature is termed?",
    choices: ["Homeostasis", "Endothermy", "Ectothermy", "Metabolism"],
    answer: "Ectothermy"
  },
  {
    question: "Which structure in fish aids buoyancy?",
    choices: ["Gill", "Lateral line", "Swim bladder", "Operculum"],
    answer: "Swim bladder"
  },
  {
    question: "Which disease affects the pancreas and disrupts insulin production?",
    choices: ["Hypertension", "Diabetes mellitus", "Tuberculosis", "Anaemia"],
    answer: "Diabetes mellitus"
  },
  {
    question: "Which gas is required for aerobic respiration?",
    choices: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Oxygen"
  },
  {
    question: "Which structure connects muscle to bone?",
    choices: ["Ligament", "Cartilage", "Tendon", "Joint"],
    answer: "Tendon"
  },
  {
    question: "Which part of the digestive system absorbs digested food?",
    choices: ["Stomach", "Large intestine", "Small intestine", "Duodenum"],
    answer: "Small intestine"
  },
  {
    question: "Which blood group is a universal recipient?",
    choices: ["A", "B", "AB", "O"],
    answer: "AB"
  },
  {
    question: "Which condition results from lack of iron in the diet?",
    choices: ["Scurvy", "Anaemia", "Rickets", "Goitre"],
    answer: "Anaemia"
  },
  {
    question: "The right atrium receives what type of blood?",
    choices: ["oxygen-poor", "oxygen-rich", "carbon-dioxide-rich", "carbon-dioxide-poor"],
    answer: "oxygen-poor"
  },
  {
    question: "Which of the following best explains the principle of complementary base pairing in DNA?",
    choices: ["A with G, C with T", "A with T, C with G", "A with C, G with T", "T with G, A with C"],
    answer: "A with T, C with G"
  },
  {
    question: "What part of the cell membrane provides structural support and fluidity?",
    choices: ["Carbohydrates", "Cholesterol", "Proteins", "RNA"],
    answer: "Cholesterol"
  },
  {
    question: "In plant transpiration, most water is lost through the?",
    choices: ["Root hair", "Stomata", "Xylem", "Phloem"],
    answer: "Stomata"
  },
  {
    question: "Which process produces the most ATP per glucose molecule?",
    choices: ["Glycolysis", "Fermentation", "Aerobic respiration", "Substrate-level phosphorylation"],
    answer: "Aerobic respiration"
  },
  {
    question: "Which enzyme unzips the DNA helix during replication?",
    choices: ["DNA ligase", "DNA polymerase", "Helicase", "Topoisomerase"],
    answer: "Helicase"
  },
  {
    question: "Which of the following is NOT a product of the light-dependent reactions?",
    choices: ["ATP", "NADPH", "Oxygen", "Glucose"],
    answer: "Glucose"
  },
  {
    question: "Which structure in eukaryotic cells is responsible for protein synthesis?",
    choices: ["Lysosome", "Ribosome", "Golgi apparatus", "Mitochondrion"],
    answer: "Ribosome"
  },
  {
    question: "The primary function of the large intestine is to?",
    choices: ["Absorb nutrients", "Absorb water", "Digest proteins", "Produce bile"],
    answer: "Absorb water"
  },
  {
    question: "What type of bond holds the two strands of DNA together?",
    choices: ["Ionic bonds", "Peptide bonds", "Hydrogen bonds", "Glycosidic bonds"],
    answer: "Hydrogen bonds"
  },
  {
    question: "Which cell organelle detoxifies harmful substances and metabolizes drugs?",
    choices: ["Peroxisomes", "Smooth ER", "Mitochondria", "Lysosomes"],
    answer: "Smooth ER"
  },
  {
    question: "Which of the following increases the rate of diffusion?",
    choices: ["Lower temperature", "Lower concentration gradient", "Higher molecular size", "Higher temperature"],
    answer: "Higher temperature"
  },
  {
    question: "Why are mitochondria called the powerhouse of the cell?",
    choices: ["They store energy", "They produce ATP", "They break down waste", "They build proteins"],
    answer: "They produce ATP"
  },
  {
    question: "Which of the following is characteristic of active transport?",
    choices: ["Moves with the gradient", "Requires ATP", "No carrier proteins", "Passive process"],
    answer: "Requires ATP"
  },
  {
    question: "Which hormone regulates blood sugar levels?",
    choices: ["Thyroxine", "Insulin", "Adrenaline", "Testosterone"],
    answer: "Insulin"
  },
  {
    question: "What is the main function of hemoglobin?",
    choices: ["Fight infections", "Clot blood", "Transport oxygen", "Digest fats"],
    answer: "Transport oxygen"
  },
  {
    question: "Which of these processes increases genetic variation?",
    choices: ["Binary fission", "Mitosis", "Crossing over", "Cloning"],
    answer: "Crossing over"
  },
  {
    question: "In humans, spermatogenesis occurs in the?",
    choices: ["Ovary", "Testes", "Uterus", "Epididymis"],
    answer: "Testes"
  },
  {
    question: "Enzymes are made of?",
    choices: ["Lipids", "Carbohydrates", "Proteins", "Vitamins"],
    answer: "Proteins"
  },
  {
    question: "Which type of macromolecule is cellulose?",
    choices: ["Protein", "Lipid", "Carbohydrate", "Nucleic acid"],
    answer: "Carbohydrate"
  },
  {
    question: "The functional unit of the kidney is the?",
    choices: ["Neuron", "Nephron", "Alveolus", "Osteon"],
    answer: "Nephron"
  },
  {
    question: "What gas is essential for aerobic respiration?",
    choices: ["Nitrogen", "Oxygen", "Carbon dioxide", "Methane"],
    answer: "Oxygen"
  },
  {
    question: "Which of the following is a diploid cell?",
    choices: ["Sperm", "Egg", "Zygote", "Spore"],
    answer: "Zygote"
  },
  {
    question: "Which stage of the cell cycle is DNA replicated?",
    choices: ["G1", "S", "G2", "M"],
    answer: "S"
  },
  {
    question: "What pigment gives plants their green color?",
    choices: ["Carotene", "Xanthophyll", "Chlorophyll", "Anthocyanin"],
    answer: "Chlorophyll"
  },
  {
    question: "The bacteria that fix nitrogen in root nodules are called?",
    choices: ["Rhizobium", "E. coli", "Lactobacillus", "Streptococcus"],
    answer: "Rhizobium"
  },
  {
    question: "Which of these is NOT a nucleotide base in DNA?",
    choices: ["Adenine", "Uracil", "Guanine", "Thymine"],
    answer: "Uracil"
  },
  {
    question: "Blood pressure is highest in the?",
    choices: ["Veins", "Capillaries", "Aorta", "Venules"],
    answer: "Aorta"
  },
  {
    question: "Which of these is involved in cell division?",
    choices: ["Centrosome", "Ribosome", "Chloroplast", "Golgi body"],
    answer: "Centrosome"
  },
  {
    question: "What is a gene?",
    choices: ["A chromosome", "A protein", "A DNA segment", "A cell organelle"],
    answer: "A DNA segment"
  },
  {
    question: "Which organ system controls hormones?",
    choices: ["Nervous system", "Circulatory system", "Endocrine system", "Respiratory system"],
    answer: "Endocrine system"
  },
  {
    question: "Which of the following is NOT involved in protein synthesis?",
    choices: ["mRNA", "tRNA", "rRNA", "DNA ligase"],
    answer: "DNA ligase"
  },
  {
    question: "Which vessel carries oxygenated blood from lungs to heart?",
    choices: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
    answer: "Pulmonary vein"
  },
  {
    question: "The lachrymal gland produces?",
    choices: ["Saliva", "Sweat", "Tears", "Hormones"],
    answer: "Tears"
  },
  {
    question: "What type of immunity results from vaccination?",
    choices: ["Passive", "Active", "Innate", "Natural"],
    answer: "Active"
  },
  {
    question: "Which of the following is a monocot plant?",
    choices: ["Peanut", "Maize", "Bean", "Cassava"],
    answer: "Maize"
  },
  {
    question: "The largest part of the brain is the?",
    choices: ["Cerebellum", "Medulla", "Cerebrum", "Hypothalamus"],
    answer: "Cerebrum"
  },
  {
    question: "Which part of blood helps in clotting?",
    choices: ["Plasma", "Platelets", "RBC", "WBC"],
    answer: "Platelets"
  },
    {
    question: "The process of water uptake by roots is called?",
    choices: ["Transpiration", "Osmosis", "Photosynthesis", "Diffusion"],
    answer: "Osmosis"
  },
  {
    question: "Which human enzyme digests proteins?",
    choices: ["Amylase", "Lipase", "Pepsin", "Lactase"],
    answer: "Pepsin"
  },
  {
    question: "Which type of pathogen causes tuberculosis?",
    choices: ["Virus", "Bacterium", "Fungus", "Protozoan"],
    answer: "Bacterium"
  },
  {
    question: "Which vitamin is essential for calcium absorption?",
    choices: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    answer: "Vitamin D"
  },
  {
    question: "Which blood type is the universal recipient?",
    choices: ["O", "A", "B", "AB"],
    answer: "AB"
  },
  {
    question: "Which organ stores bile?",
    choices: ["Stomach", "Pancreas", "Gallbladder", "Liver"],
    answer: "Gallbladder"
  },
  {
    question: "Which process forms glucose in plants?",
    choices: ["Glycolysis", "Photosynthesis", "Cellular respiration", "Fermentation"],
    answer: "Photosynthesis"
  },
  {
    question: "What is the name of the fluid part of blood?",
    choices: ["Serum", "Plasma", "Lymph", "Saliva"],
    answer: "Plasma"
  },
  {
    question: "Which hormone is released during stress?",
    choices: ["Insulin", "Glucagon", "Adrenaline", "Estrogen"],
    answer: "Adrenaline"
  },
  {
    question: "Which part of the neuron receives impulses?",
    choices: ["Axon terminal", "Cell body", "Dendrites", "Myelin sheath"],
    answer: "Dendrites"
  },
  {
    question: "Which enzyme begins digestion in the mouth?",
    choices: ["Pepsin", "Trypsin", "Amylase", "Lipase"],
    answer: "Amylase"
  },
  {
    question: "Which cells in the immune system produce antibodies?",
    choices: ["T cells", "B cells", "RBCs", "Platelets"],
    answer: "B cells"
  },
  {
    question: "Chromosomes first become visible during?",
    choices: ["Interphase", "Prophase", "Metaphase", "Anaphase"],
    answer: "Prophase"
  },
  {
    question: "The inner lining of the small intestine is called?",
    choices: ["Peritoneum", "Villi", "Epiglottis", "Endocardium"],
    answer: "Villi"
  },
  {
    question: "Which gas is required for photosynthesis?",
    choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Methane"],
    answer: "Carbon dioxide"
  },
  {
    question: "What type of joint is found in the shoulder?",
    choices: ["Hinge", "Pivot", "Ball and socket", "Fixed"],
    answer: "Ball and socket"
  },
  {
    question: "Which structure prevents food from entering the trachea?",
    choices: ["Epiglottis", "Uvula", "Vocal cord", "Pharynx"],
    answer: "Epiglottis"
  },
  {
    question: "Which part of the brain controls heartbeat?",
    choices: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    answer: "Medulla"
  },
  {
    question: "Which muscle is responsible for breathing?",
    choices: ["Biceps", "Diaphragm", "Quadriceps", "Triceps"],
    answer: "Diaphragm"
  },
  {
    question: "Which plant tissue transports water?",
    choices: ["Phloem", "Xylem", "Cortex", "Epidermis"],
    answer: "Xylem"
  },
  {
    question: "Which part of the male reproductive system stores sperm?",
    choices: ["Testes", "Prostate", "Epididymis", "Seminal vesicle"],
    answer: "Epididymis"
  },
  {
    question: "Which vitamin deficiency causes scurvy?",
    choices: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: "Vitamin C"
  },
  {
    question: "The study of heredity is called?",
    choices: ["Ecology", "Genetics", "Physiology", "Anatomy"],
    answer: "Genetics"
  },
  {
    question: "Which organ filters blood in the human body?",
    choices: ["Heart", "Liver", "Kidneys", "Lungs"],
    answer: "Kidneys"
  },
  {
    question: "What term describes equal concentration of solutes inside and outside a cell?",
    choices: ["Hypertonic", "Hypotonic", "Isotonic", "Osmotic"],
    answer: "Isotonic"
  },
  {
    question: "Which process produces gametes?",
    choices: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
    answer: "Meiosis"
  },
  {
    question: "Which organelle contains digestive enzymes?",
    choices: ["Golgi apparatus", "Lysosome", "Mitochondria", "Ribosome"],
    answer: "Lysosome"
  },
  {
    question: "Which pathway does glucose enter first in respiration?",
    choices: ["Krebs cycle", "Electron transport chain", "Glycolysis", "Link reaction"],
    answer: "Glycolysis"
  },
  {
    question: "Which type of blood vessel carries blood back to the heart?",
    choices: ["Arteries", "Veins", "Capillaries", "Arterioles"],
    answer: "Veins"
  },
  {
    question: "What is the first line of defense against pathogens?",
    choices: ["Antibodies", "Skin", "T cells", "B cells"],
    answer: "Skin"
  },
  {
    question: "Which organ produces insulin?",
    choices: ["Liver", "Pancreas", "Kidney", "Thyroid"],
    answer: "Pancreas"
  },
  {
    question: "Which organelle is known as the ‘powerhouse’?",
    choices: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi apparatus"],
    answer: "Mitochondrion"
  },
  {
    question: "Which of the following store genetic information?",
    choices: ["Proteins", "Lipids", "Nucleic acids", "Carbohydrates"],
    answer: "Nucleic acids"
  },
  {
    question: "Which human cells have no nucleus?",
    choices: ["Neurons", "Red blood cells", "Muscle cells", "Epithelial cells"],
    answer: "Red blood cells"
  },
  {
    question: "Which hormone regulates metabolism?",
    choices: ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"],
    answer: "Thyroxine"
  },
  {
    question: "The fluid that surrounds cells is called?",
    choices: ["Blood plasma", "Interstitial fluid", "Lymph", "Cytoplasm"],
    answer: "Interstitial fluid"
  },
  {
    question: "Which type of macromolecule are enzymes?",
    choices: ["Lipids", "Carbohydrates", "Proteins", "Vitamins"],
    answer: "Proteins"
  },
  {
    question: "Which structure stores DNA in eukaryotic cells?",
    choices: ["Mitochondria", "Nucleus", "Cytoplasm", "Cell membrane"],
    answer: "Nucleus"
  },
  {
    question: "Which blood component transports carbon dioxide?",
    choices: ["Red blood cells", "Platelets", "Plasma", "White blood cells"],
    answer: "Plasma"
  },
  {
    question: "Which organ is responsible for gas exchange?",
    choices: ["Heart", "Lung", "Kidney", "Liver"],
    answer: "Lung"
  },
  {
    question: "Where does fertilization occur in humans?",
    choices: ["Uterus", "Fallopian tube", "Vagina", "Ovary"],
    answer: "Fallopian tube"
  },
  {
    question: "Which gas causes greenhouse effect?",
    choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    answer: "Carbon dioxide"
  },
  {
    question: "The HIV specifically target and destroy a white blood cell called?",
    choices: ["T helper cells", "B cells", "Natural killer cells", "Macrophages"],
    answer: "T helper cells"
  }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showQuiz() {
  welcomeMsg.classList.add('hide');
  questBox.classList.remove('hide');
  currentDiv.classList.remove('hide');
  startButton.classList.add('hide');
  scoreDisplay.textContent = `0 / ${questions.length}`;
  questionNumberDisplay.textContent = `1 of ${questions.length}`;

};

let currentIndex = 0;

function getQuestions() {
  nextButton.disabled = true;
  answerButtonsElement.innerHTML = "";
  questionElement.innerHTML = questions[currentIndex].question;
  shuffleArray(questions[currentIndex].choices);
  questions[currentIndex].choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.value = choice;
    button.classList.add('btn');
    answerButtonsElement.appendChild(button);
    button.addEventListener("click", () => {
      Array.from(answerButtonsElement.children).forEach(btn => btn.disabled = true);
      nextButton.disabled = false;
      if (button.value === questions[currentIndex].answer) {
        button.classList.add('green');
        button.innerHTML = `${button.value} <span>&#10004;</span> `;
        let currentScore = parseInt(scoreDisplay.textContent) || 0;
        scoreDisplay.textContent = `${currentScore + 1} / ${questions.length}`;
      }
      else if (button.value !== questions[currentIndex].answer) {
        button.classList.add('red');
        button.innerHTML = `${button.value} <span>&#10008;</span> `;
        Array.from(answerButtonsElement.children).forEach(btn => {
          if (btn.value === questions[currentIndex].answer) {
            btn.classList.add('green');
            btn.innerHTML = `${btn.value} <span>&#10004;</span> `;
          }
        });
      }
      nextButton.classList.remove('hide');
    })
  });
};

function getResult() {
  currentIndex++;
  if (currentIndex < questions.length) {
    questionNumberDisplay.textContent = `${currentIndex + 1} of ${questions.length}`;
    getQuestions();
  }
  else if (currentIndex === questions.length) {
    quizHeader.innerHTML = 'Quiz Completed!'
    questBox.classList.add('hide');
    nextButton.classList.remove('hide');
    scoreContainer.classList.remove('hide');
    congMsg.classList.remove('hide');
    controlButtons.classList.remove('hide');
    nextButton.classList.add('hide');
    currentDiv.classList.add('hide');

    let totalScore = parseInt(scoreDisplay.textContent);
    let percent = (totalScore / questions.length) * 100;
    score.textContent = `${totalScore} / ${questions.length} Correct`;
    percentage.textContent = `${percent}% Score`;

    if (percent >= 80) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>Congratulations!</span> &#127881 You're a genius!";
    } else if (percent >= 60) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>Good job!</span> &#128293 You're doing well!";
    } else {
      congMsg.innerHTML = "Keep practicing! You'll get better!";
    }
  }
};

function reset() {
  currentIndex = 0;
  scoreDisplay.textContent = `0 / ${questions.length}`;
  questionNumberDisplay.textContent = `1 of ${questions.length}`;
  scoreContainer.classList.add('hide');
  congMsg.classList.add('hide');
  controlButtons.classList.add('hide');
  quizHeader.innerHTML = 'Biology Quiz';
  shuffleArray(questions);
  showQuiz();
  getQuestions();
};

startButton.addEventListener('click', () => {
  shuffleArray(questions);
  showQuiz();
  getQuestions();
});
nextButton.addEventListener('click', getResult);
restartBtn.addEventListener('click', reset);