module.exports = app => {
    // put your express app logic here
    app.get('/students', (req, res) => {
        // preparing array of student
        var students = [
            {
                name: 'James Smith',
                age: 17,
                id: 1
            },
            {
                name: 'Elizabeth Johnson',
                age: 18,
                id: 2
            },
            {
                name: 'David Wilson',
                age: 19,
                id: 3
            }
        ];
        //next line will send response in JSON format
        res.json(students);
    });

    app.get('/knowledges', (req, res) => {
        var knowledges = [
            {
                title: 'Likes / Dislikes Test article',
                summary: 'Like/DisLike Test Articles for Knowledge Articles'
            },
            {
                title: 'Testing heroku flow 1',
                summary: 'Testing heroku flow 1'
            },
            {
                title: 'How to hide the field from Page Layout',
                summary:
                    'How to hide the field from Page Layout and component so that field will not be visible to customers.'
            },
            {
                title: 'How to add Video Files in Knowledge Article',
                summary:
                    'The whole point of embedding Youtube videos in another, is that iFrames are used to display their player interface (and run its supporting code). This is done by accessing the embedable player/code by using an iFrame.'
            },
            {
                title: 'How to Reset Password',
                summary: 'Process to change the Password'
            },
            {
                title: 'My new Knowledge Article E',
                summary: 'For demo, showing the new page with test formatting'
            }
        ];

        res.json(knowledges);
    });
};
