document.addEventListener('DOMContentLoaded', () => {
    const qaData = [
        {
            category: 'Robotics',
            questions: [
                {
                    q: 'What are the main components of a robotic control system?',
                    a: 'A robotic control system typically consists of:<br>1. Sensors (for input and feedback)<br>2. Controllers (processing unit)<br>3. Actuators (for movement and action)<br>4. Power system<br>5. End-effectors (tools/manipulators)<br>Each component works together to create precise, controlled movements and actions.'
                },
                {
                    q: 'How does PID control work in robotics?',
                    a: 'PID (Proportional-Integral-Derivative) control is a feedback mechanism that:<br>- P: Responds proportionally to current error<br>- I: Accumulates past errors to eliminate steady-state error<br>- D: Anticipates future errors based on rate of change<br><pre><code>Output = Kp*e(t) + Ki∫e(t)dt + Kd*de/dt</code></pre>'
                }
            ]
        },
        {
            category: 'Data Analysis',
            questions: [
                {
                    q: 'What are the key steps in a data analysis pipeline?',
                    a: 'The key steps include:<br>1. Data Collection<br>2. Data Cleaning<br>3. Exploratory Data Analysis (EDA)<br>4. Feature Engineering<br>5. Model Selection & Training<br>6. Validation<br>7. Deployment & Monitoring'
                },
                {
                    q: 'How do you handle missing data in analysis?',
                    a: 'Common approaches for handling missing data:<br>1. Deletion (listwise/pairwise)<br>2. Mean/median imputation<br>3. Predictive imputation<br>4. Multiple imputation<br>The choice depends on the missing data mechanism (MCAR, MAR, or MNAR).'
                }
            ]
        },
        {
            category: 'Embedded Systems',
            questions: [
                {
                    q: 'What are the considerations for real-time embedded systems?',
                    a: 'Key considerations include:<br>1. Deterministic timing<br>2. Interrupt handling<br>3. Resource constraints<br>4. Power management<br>5. Reliability & fault tolerance<br>6. RTOS selection<br>7. Hardware-software integration'
                },
                {
                    q: 'How do you optimize memory usage in embedded systems?',
                    a: 'Memory optimization techniques:<br>1. Static memory allocation<br>2. Stack usage optimization<br>3. Code size reduction<br>4. Memory pooling<br>5. Efficient data structures<br>6. Compiler optimization flags<br>7. Memory fragmentation prevention'
                }
            ]
        }
    ];

    const container = document.createElement('div');
    container.className = 'qa-container';

    // Create category sections
    qaData.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'qa-category';

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        categorySection.appendChild(categoryTitle);

        // Create questions for this category
        category.questions.forEach(qa => {
            const questionBox = document.createElement('div');
            questionBox.className = 'qa-box';

            const question = document.createElement('div');
            question.className = 'qa-question';
            question.innerHTML = `<span class="qa-icon">+</span>${qa.q}`;

            const answer = document.createElement('div');
            answer.className = 'qa-answer';
            answer.innerHTML = qa.a;
            answer.style.display = 'none';

            questionBox.appendChild(question);
            questionBox.appendChild(answer);

            // Add click handler for expansion
            question.addEventListener('click', () => {
                const isExpanded = answer.style.display === 'block';
                answer.style.display = isExpanded ? 'none' : 'block';
                question.querySelector('.qa-icon').textContent = isExpanded ? '+' : '-';
                questionBox.classList.toggle('expanded');
            });

            categorySection.appendChild(questionBox);
        });

        container.appendChild(categorySection);
    });

    // Add to the page
    document.querySelector('.fibonacci-container').replaceWith(container);
});