
import videoModel from '../Backend/Model/Video.model.js'

const dummyData = [
    {
        // 1
        title : "Exploring React Basics | Exclusive for beginners|Start learning",
        thumbnailUrl : "/image1.jpg",
        videoUrl : "/video6.mp4",     
        description : "This video covers the fundamentals of React for beginners.",
        channelId : "ch_123456",
        uploader : "CodeWithHemalatha",
        views : "1500",
        likes : "250",
        dislikes : 5,
        period : "1 week ago",
        uploadDate : "2025-06-20",
        comments : [
            {
                username : "RaviTech",
                text : "This was very helpful. Thank you!",

            },
            {
                username : "PriyaJS",
                text : "Can you post a video on React Hooks too?",
            }
        ],

        subscription : "2M",
        logoUrl : "/logo1.png",
        category : "Programming",
        categoryId : "123",
    },

    {
        // 2
        title : "The leadership team at IBM is really turning the company around, says BofA's Wamsi Mohan",
        thumbnailUrl : "/image2.jpg",
        videoUrl : "/video19.3gp",     
        description : "Wamsi Mohan, Bank of America Global Research senior IT hardware analyst, joins 'Squawk Box' to break down IBM's quarterly earnings results, impact of macro uncertainty, and more. For access to live and exclusive video from CNBC subscribe to CNBC PRO: https://cnb.cx/42d859g.",
        channelId : "ch_23467",
        uploader : "CNBC Television",
        views :" 7",
        likes : "33",
        dislikes : 2,
        period : "1 week ago",
        uploadDate : "2024-10-2",
        comments : [
            {
                username : "David",
                text : "IBM is no longer an American company. It's run and managed by India and they are firing US employees and moving to India.",
                timestamp : "6 hours ago"

            },
            {
                username : "Zman",
                text : "MAGA JOE 'The macro issues causing uncertainty'. What could those possibly be...",
                timestamp : "2 months ago"
            }
        ],

        subscription : "3.15",
        logoUrl : "/logo2.png",
        category : "News",
        categoryId : "234N",
    },

    {
        // 3
        title : "Conversation with Elon Musk: Satya Nadella at Microsoft Build 2025",
        thumbnailUrl : "/image3.jpg",
        videoUrl : "/video29.mp4",     
        description : "Satya Nadella talks with Elon Musk at Microsoft Build 2025.Subscribe to Microsoft on YouTube here: https://aka.ms/SubscribeToYouTube",
        channelId : "ch_5234",
        uploader : "Microsoft",
        views : "195,902",
        likes : "3.7K",
        dislikes : 10,
        period : "1 month ago",
        uploadDate : "2024-10-2",
        comments : [
            {
                username : "Anshika",
                text : "In trading, possessing technical analysis skills is not sufficient on its own; discipline and emotional maturity play crucial roles in achieving success. Embracing the mindset of time in the market vs. timing the market proves valuable, especially during market fluctuations.",
                timestamp : "2 months ago"

            },
            {
                username : "Chris28",
                text : "I attribute my growing daily earnings to Isabella Fanucchi’s valuable insights and daily trade signals, coupled with my commitment to continuous learning. Kudos to the journey ahead!",
                timestamp : "1 months ago"
            },
            {
                username : "Sarkar288",
                text : "Very helpful information.Thank you!",
                timestamp : "4 days ago"
            }
        ],

        subscription : "2.18",
        logoUrl : "/logo3.png",
        category : "AI",
        categoryId : "214N",
    },

    {
        // 4
        title : "We Are Not SAFE?! 😨 | Madan Gowri | MG Squad 🖖",
        thumbnailUrl : "/public/image4.jpg",
        videoUrl : "/public/video21.mp4",     
        description : "In this video, Madan Gowri explains the top 15 powerful points shared by Geoffrey Hinton, the Godfather of AI. From AI replacing routine jobs to its role in cybersecurity and the future of work and several jobs, this video covers everything about how artificial intelligence is changing our world. Will AI think better than humans? What happens to elections, the digital world, and jobs by 2055? Can AI develop on its own? MG breaks it down in Tamil, including how AI and humans might face off in the coming years.",
        channelId : "ch_52334",
        uploader : "Madhan Gowri",
        views : "277k",
        likes : "8.6k",
        dislikes : 2,
        period : "10 days ago",
        uploadDate : "2025-6-20",
        comments : [
            {
                username : "Shivani23",
                text : " AI is here to assist humans not to replace us",
                timestamp : "2 days ago"

            },
            {
                username : "KiranMS",
                text : "Thank you for your info bro!!!",
                timestamp : "8 days ago"
            },
            {
                username : "Sahana@12",
                text : "Very helpful information.",
                timestamp : "12 hours ago"
            }
        ],

        subscription : "8.24",
        logoUrl : "/logo4.png",
        category : "AI",
        categoryId : "211N",
    },

     {
        // 5
        title : "ENGLISH SPEECH | SUDHA MURTY: Discipline and Success (English Subtitles) ",
        thumbnailUrl : "/image5.jpg",
        videoUrl : "/video27.mp4",     
        description : "Learn English with Sudha Murty. Join us as Sudha Murty, a distinguished author and philanthropist, shares her invaluable insights on education, discipline, and the pursuit of knowledge at the Jamnabai Narsee Campus in 2017. Through personal anecdotes and stories, Mrs. Murty emphasizes the significance of hard work, the beauty of innocent curiosity, and the critical role of discipline in shaping one's future. Her speech is a treasure trove of wisdom for students, educators, and parents alike, encouraging a deep appreciation for lifelong learning and ethical living.",
        channelId : "ch_52034",
        uploader : "English Speeches",
        views : "3M+",
        likes : "63k",
        dislikes : 10,
        period : "4 years ago",
        uploadDate : "2020-6-6",
        comments : [
            {
                username : "@kelvin",
                text : " She is a broad minded woman for all students,and for all people whether young or old people as a whole.",
                likes :" 60",
                timestamp : "1 year ago"

            },
            {
                username : "Anwesh22",
                text : "Congratulations madam your  nominated Rajya sabha, you must be in parliament",
                likes : "100",
                timestamp : "6 month ago"
            },
            {
                username : "suba@12",
                text : "This lady speaks English really well; super impressed..!!  Wishing her all the best ahead. Just a small suggestion though - her accent could still get better with time.",
                likes : "78",
                timestamp : "20 days ago"
            }
        ],

        subscription : "6.14M",
        logoUrl : "/logo5.png",
        category : "Education",
        categoryId : "201A",
    },

    {
        // 6
        title : "Mahadev - Trailer | Hrithik Roshan | Aishwarya Rai | Amitabh Bachchan | New Movie Trailer 2025  ",
        thumbnailUrl : "/image6.jpg",
        videoUrl : "/public/video6.mp4",     
        description : "Unreal Films presents concept trailer of Mahadev - Trailer | Hrithik Roshan | Aishwarya Rai | Amitabh Bachchan | New Movie Trailer 2025",
        channelId : "ch_12024",
        uploader : "Unreel Films",
        views : "3M+",
        likes : "387k",
        
        period : "4 months ago",
        uploadDate : "2024-12-5",
        comments : [
            {
                username : "@khiradritanaya",
                text : "Mohit Raina is the best for Mahadev ❤",
                likes :"81",
                timestamp : "1 month ago"

            },
            {
                username : "@Mayuresh3032",
                text : "I always imagined hritik as mahadev,, but cant be better then mohit raina",
                likes : "50",
                timestamp : "3 months ago"
            },
            {
                username : "@rajanlalwani5",
                text : "I wish I request I could see Hrithik  Roshan as Indian James Bond and do the movies like Tom Cruise movies.",
                likes : "4",
                timestamp : "5 months ago"
            },
            {
                username : "@SeetaramSingh",
                text : "Har Har Mahadev 💖🫂😘💥🙇🔱🙏",
                likes : "200+",
                timestamp : "6 days ago"
            }
        ],

        subscription : "234K",
        logoUrl : "/logo6.png",
        category : "Movies",
        categoryId : "120M",
    },

    {
        // 7
        title : "2K KIDS LOVE PROPOSAL TROLL - Today Trending",
        thumbnailUrl : "/image7.jpg",
        videoUrl : "/video29.mp4",     
        description : "The views and opinions expressed in this video are not meant to hurt any individual. we cannot held liable in such situations",
        channelId : "ch_1205",
        uploader : "Today Trending",
        views : "3.2M+",
        likes : "3.2K",
        period : "10 months ago",
        uploadDate : "2024-8-5",
        comments : [
            {
                username : "Sharan12",
                text : "Very funny and good relaxation!",
                likes :"120",
                timestamp : "4 months ago"

            },
            
        ],

        subscription : "2M",
        logoUrl : "/logo7.png",
        category : "Trending",
        categoryId : "19T",
    },

    {
        // 8
        title : "Shaky ( Official #Video ) Sanju Rathod Ft. Isha Malviya | G-Spark | New #Marathi Songs 2025",
        thumbnailUrl : "/image8.jpg",
        videoUrl : "/video27.mp4",     
        description : "Shaky is a fresh Marathi Pop anthem that blends playful Afrobeat grooves with everyday desi charm. Sanju Rathod and Isha Malviya bring effortless swag, catchy hooks, and vibrant energy in this fun, feel-good love track. A bold, danceable vibe that pushes Marathi music into exciting new territory.",
        channelId : "ch_1202",
        uploader : "Sanju Rathod SR",
        views : "170K",
        likes : "3.2K",
        period : "1 month ago",
        uploadDate : "2025-5-10",
        comments : [
            {
                username : "YasirMD",
                text : "A Man Who Change The All Marathi Music Vibes",
                likes :"6k",
                timestamp : "20 days ago"

            },
            
        ],

        subscription : "4.35M",
        logoUrl : "/logo8.png",
        category : "Songs",
        categoryId : "87S",
    },

    {
        // 9
        title : "Ramp Car Racing - Car Racing 3D - Android Gameplay",
        thumbnailUrl : "/image9.jpg",
        videoUrl : "/video19.3gp",     
        description : "Welcome to Ramp Car Stunts Racing: Impossible Tracks 3D and hot car stunts game. Games Wing proudly presents New & updated games and one of them is Car games. If you are crazy about Sports games and want to have a lot of fun with Endless racing over impossible tracks then this offline games 2021 is Recommended for you. Ramp car stunts racing is a free car games that gives you the best Driving games experience. ",
        channelId : "ch_1101",
        uploader : "Gaming Aadii",
        views : "170K",
        likes : "127K",
        period : "2 years ago",
        uploadDate : "2023-5-20",
        comments : [
            {
                username : "Gamehavenstudio",
                text : "Hi sir I'm John from Assam Mera bhi ek youtube channel hai Sir lekin mera video par view nahi aah Raha hai...sir me bhi cartoon video banata hu...sir please help me",
                likes :"80k",
                timestamp : "1 year ago"

            },

            {
                username : "GameMaster12",
                text : "Very very enjoyable ❤❤❤ ",
                likes :"29",
                timestamp : "2 days ago"

            },
            
        ],

        subscription : "876K",
        logoUrl : "/logo9.png",
        category : "Gaming",
        categoryId : "80G",
    },

    {
        // 10
        title : "How 35 Died In Sangareddy Pharma Plant Blast | Telangana | Revanth Reddy | India Today",
        thumbnailUrl : "/image10.jpg",
        videoUrl : "/video6.mp4",     
        description : "India Today TV is India's leading English News Channel. India Today YouTube channel offers latest news videos on Politics, Business, Cricket, Bollywood, Lifestyle, Auto, Technology, Travel, Entertainment and a lot more. Stay tuned for latest updates and in-depth analysis of news from India and around the world! ",
        channelId : "ch_161",
        uploader : "India Today",
        views : "287K",
        likes : "2.3K",
        period : "4 hours ago",
        uploadDate : "2025-7-01",
        comments : [
            {
                username : "agunniraj",
                text : "I'm deeply saddened by the news of the explosion/fire and the loss of life. My heart goes out to the families and friends of the victims",
                likes :"5",
                timestamp : "40 mins ago "

            },

            {
                username : "lazarpj6767",
                text : "You will hear of wars and rumors of wars. See that you are not alarmed, because these things must happen, but the end is not yet.",
                likes :"2",
                timestamp : "1 hour ago"

            },

            {
                username : "Prabhatkumar",
                text : "Unfortunete. Work men safety Rules should always be adhered to by everyone.prevention is always better than cure.",
                likes :"6",
                timestamp : "3 hour ago"

            },
            
        ],

        subscription : "10.5K",
        logoUrl : "/logo10.png",
        category : "News",
        categoryId : "007N",
    },

    {
        // 11
        title : "C Mart Paavangal | Parithabangal",
        thumbnailUrl : "/image11.jpg",
        videoUrl : "/video21.mp4",     
        description : "A hilarious take on supermarket struggles by the Parithabangal duo. Must-watch comedy!  ",
        channelId : "ch_021",
        uploader : "Paridhabangal",
        views : "215000",
        likes : "19k+",
        period : "4 weeks ago",
        uploadDate : "2025-5-23",
        comments : [
            {
                username : "TamilLaughs",
                text : "Unmaiyaa supermarket-la naanum ipdi dhaan paavangal! 😂",
                likes :"250",
                timestamp : "10 days ago "

            },

            {
                username : "ComedyFan99",
                text : "Parithabangal vera level bro 🔥🔥🔥",
                likes :"135",
                timestamp : "2 weeks ago"

            },

            {
                username : "SnehaR",
                text : "Sema editing and acting! Waiting for the next video",
                likes :"80+",
                timestamp : "2 weeks ago"

            },
            
        ],

        subscription : "3.5K",
        logoUrl : "/logo11.png",
        category : "Trending",
        categoryId : "023T",
    },

    {
        // 12
        title : "Narivetta | Minnalvala Lyrical | Tovino Thomas | Jakes Bejoy | Sid Sriram | Sithara | ECHO STUDIO",
        thumbnailUrl : "/image12.jpg",
        videoUrl : "/video29.mp4",     
        description : " Movie - Narivetta ,Song - Minnalvala ,Song Composed Arranged & Produced by JAKES BEJOY, Lyrics : KAITHAPRAM DAMODARAN NAMBOOTHIRI, Singers : SID SRIRAM, SITHARA KRISHNAKUMAR ",
        channelId : "ch_0331",
        uploader : "Echo Studio",
        views : "100k",
        likes : "6.4k",
        period : "2 month ago",
        uploadDate : "2025-4-4",
        comments : [
            {
                username : "@APlusAcademyNilambur",
                text : "Sid Sriram പാട്ടുകൾക്ക് എപ്പോഴും എന്തോ ഒരു പ്രത്യേകതയാണ് ",
                likes :"7",
                timestamp : "1 month ago "

            },

            {
                username : "@Raider-177",
                text : "Chetta this is powli sadhanam  . You are a great artist . I love this one that i melt with it",
                likes :"15",
                timestamp : "2 weeks ago"

            },

        ],

        subscription : "7.62K",
        logoUrl : "/logo12.png",
        category : "Songs",
        categoryId : "024S",
    },

    {
        // 13
        title : "What is a REST API?",
        thumbnailUrl : "/image13.jpg",
        videoUrl : "/video6.mp4",     
        description : " What is a REST API? What are the benefits and how are they fundamental to your cloud application?In this lightboard video, Nathan Hekman with IBM Cloud, answers these questions and much more as he visually shows the benefits a company can gain with using REST API.",
        channelId : "ch_09817",
        uploader : "IBM Technology",
        views : "172K",
        likes : "47K",
        period : "5 years ago",
        uploadDate : "2020-4-23",
        comments : [
            {
                username : "@RobinShrestha1",
                text : "I'm not sure if I'm more impressed with the explanation or the fact that he wrote all this stuff backwards to our viewpoint ",
                likes :"800+",
                timestamp : " 3 years ago "

            },

            {
                username : "@Raiden-17",
                text : "As a person who is just starting out learning about APIs and Integration...this was a goldmine. Thanks a lot!",
                likes :"120",
                timestamp : "1 year ago"

            },

        ],

        subscription : "1.26M",
        logoUrl : "/logo13.png",
        category : "Programming",
        categoryId : "0289P",
    },

    {
        // 14
        title : "The 3-2-1 Speaking Trick That Forces You To Stop Rambling!",
        thumbnailUrl : "/image14.jpg",
        videoUrl : "/video19.3gp",     
        description : " When you're put on the spot to speak and you feel the pressure to give a good answer, without frameworks, you ramble and speak your messy thoughts out loud. This comes across unclear, and lacking in authority and confidence.The 3-2-1 framework is a powerful yet simple way to combat rambling, by simply distilling your thinking into a listicle, either 3 steps, 2 types, or the 1 thing.Now instead of blurting out mumbo jumbo you're now speaking in clear points in the moment. ",
        channelId : "ch_09017",
        uploader : "Vinh Giang",
        views : "10M",
        likes : "8M+",
        period : "2 years ago",
        uploadDate : "2022-4-23",
        comments : [
            {
                username : "Vanessa_88-g3e",
                text : "It's crazy how something as simple as a framework can change the way people perceive you. I used to ramble a lot, especially when nervous or trying to sound smart.  ",
                likes :"95",
                timestamp : " 1 month ago "

            },

            {
                username : "Nandalal",
                text : "If you’ve been wondering why you’re not feeling as strong, motivated, or sharp as you used to, Testosterone Rewired by David Brooks might just have the answers. The book focuses on the power of testosterone and how increasing it can seriously transform your health and mindset.",
                likes :"3.4k",
                timestamp : "10 month ago"

            },

             {
                username : "@julians_ssplinter",
                text : "Managed to turn small talk into a chain of small conversations that led to more concrete discussions. Thanks a lot for this tip!",
                likes :"64",
                timestamp : "1 year ago"

            },

        ],

        subscription : "5M",
        logoUrl : "/logo14.png",
        category : "Education",
        categoryId : "029E",
    },

    {
        // 15
        title : "Muththa Mazhai - Chinmayi Performance | Thug Life | Kamal Haasan | Mani Ratnam | STR | AR Rahman",
        thumbnailUrl : "/image15.jpg",
        videoUrl : "/video19.3gp",     
        description : "Presenting 'Muththa Mazhai', a mesmerizing performance by Chinmayi Sripada from Thug Life, directed by Mani Ratnam. This musical journey is powered by the genius of A.R. Rahman.Song Credits:Song: Muththa Mazhai Singer: Chinmayi Sripada Lyrics: Siva Ananth,Music: A.R. Rahman  ",
        channelId : "ch_0977",
        uploader : "Saregama Tamil",
        views : "10M",
        likes : "8M+",
        period : "3 months ago",
        uploadDate : "2025-4-17",
        comments : [
            {
                username : "Aadhi",
                text : "ARR’s mind voice: “Guys, I’ve done my best to bring Chinmayi back to Tamil playback singing. The rest is in your hands!!!”  ",
                likes :"100+",
                timestamp : " 24 hours ago "

            },

            {
                username : "Madhan",
                text : "No one appreciates the background singers. Their voices added magic to this song.  OMG they were on fire 🔥",
                likes :"1.2k",
                timestamp : "3 months ago"

            },

             {
                username : "Kalki28",
                text : "Iam from kerala. Can't control myself. വേറെ വീഡിയോസ് ഒന്നും നോക്കാൻ പറ്റുന്നില്ല. ഈ പാട്ടിൽ തങ്ങി നിൽക്കുന്നു. What  a song. What a magical voice. Like it soooooooooomuch❤❤❤❤",
                likes :"10",
                timestamp : "1 month ago"

            },

        ],

        subscription : "6M+",
        logoUrl : "/logo15.png",
        category : "Song",
        categoryId : "020S",
    },

    {
        // 16
        title : "Miss World 2014 - Lifetime Beauty with a Purpose Award - Aishwarya Rai Bachchan",
        thumbnailUrl : "/image16.jpg",
        videoUrl : "/video21.mp4",     
        description : "Former beauty queen Aishwarya Rai Bachchan received the Most Successful Miss World award in London. Her husband - Abhishek, daughter Aaradhya and mother Vrunda Rai were also present to receive this honour. The Bachchan bahu was a very special guest at the 64th edition of Miss World Finale 2014. She received this award for her Outstanding contribution in Beauty with Purpose.",
        channelId : "ch_0077",
        uploader : "Beauty Pageants",
        views : "11M",
        likes : "89k",
        period : "7 years ago",
        uploadDate : "2017-4-13",
        comments : [
            {
                username : "Anandh",
                text : "OMG!! This is how she looks after winning the Miss World title 20 years earlier?? She is even more beautiful as she gets older!",
                likes :"10K",
                timestamp : " 1 year ago"

            },

            {
                username : "Maha23",
                text : "A crowned princess, a daughter, a wife, a mother, an actor, everyone, may be a friend and a lot.... all perfect..She is not just a beauty she is a complete woman",
                likes :"567",
                timestamp : "3 years ago"

            },

             

        ],

        subscription : "10M+",
        logoUrl : "/logo16.png",
        category : "Awards",
        categoryId : "290A",
    },

     {
        // 17
        title : "Elon Musk Slams Trump’s ‘Big Beautiful Bill’, Threatens To Launch America Party",
        thumbnailUrl : "/image17.jpg",
        videoUrl : "/video27.mp4",     
        description : "Elon Musk has unleashed a series of fiery tweets slamming U.S. President Donald Trump’s controversial ‘Big Beautiful Bill,’ calling it a “disgusting abomination.” As the Senate raced to pass the nearly 1,000-page legislation before July 4, Musk warned lawmakers supporting it would lose their next primaries. He even floated launching his own “America Party.” The bill aims to extend Trump’s 2017 tax cuts while slashing funds for green energy and expanding border security. ",
        channelId : "ch_0247",
        uploader : "Business Today",
        views : "10M",
        likes : "10k",
        period : "7 days ago",
        uploadDate : "2025-7-1",
        comments : [
            {
                username : "yitkuanlee",
                text : "For him anything came out from his fouling mouth were good and beautiful nothing's ugly and dirty shits",
                likes :"128",
                timestamp : " 20 hours ago"

            },

        ],

        subscription : "2M+",
        logoUrl : "/logo17.png",
        category : "News",
        categoryId : "23N",
    },


    {
        // 18
        title : "CAN YOU STOP THE TRAIN IN GTA SAN ANDREAS? | GTA EXPERIMENT",
        thumbnailUrl : "/image18.jpg",
        videoUrl : "/video29.mp4",     
        description : "In this video, we test if it's really possible to stop the unstoppable train in GTA San Andreas!We try blocking the tracks with big vehicles, using explosives, and more crazy ideas! Watch till the end to see the surprising result! ",
        channelId : "ch_896",
        uploader : "GTA Explorer Hub",
        views : "19K",
        likes : "2.4K",
        period : "10 days ago",
        uploadDate : "2025-6-20",
        comments : [
            {
                username : "kittylink511",
                text : "To derail the train in sa you have to drive the train yourself and go super fast around a turn",
                likes :"20",
                timestamp : "7 days ago"

            },

            {
                username : "seadweller3",
                text : "How’s you find 50 volunteers to stand in front of the train?",
                likes :"72",
                timestamp : "23 hours ago"

            },

        ],

        subscription : "45K",
        logoUrl : "/logo18.png",
        category : "Gaming",
        categoryId : "12G",
    },

    {
        // 19
        title : "CAN YOU STOP THE TRAIN IN GTA SAN ANDREAS? | GTA EXPERIMENT",
        thumbnailUrl : "/image18.jpg",
        videoUrl : "/video6.mp4",     
        description : "In this video, we test if it's really possible to stop the unstoppable train in GTA San Andreas!We try blocking the tracks with big vehicles, using explosives, and more crazy ideas! Watch till the end to see the surprising result! ",
        channelId : "ch_896",
        uploader : "GTA Explorer Hub",
        views : "19K",
        likes : "2.4K",
        period : "10 days ago",
        uploadDate : "2025-6-20",
        comments : [
            {
                username : "kittylink511",
                text : "To derail the train in sa you have to drive the train yourself and go super fast around a turn",
                likes :"20",
                timestamp : "7 days ago"

            },

            {
                username : "seadweller3",
                text : "How’s you find 50 volunteers to stand in front of the train?",
                likes :"72",
                timestamp : "23 hours ago"

            },

        ],

        subscription : "45K",
        logoUrl : "/logo18.png",
        category : "Gaming",
        categoryId : "12G",
    },

    {
        // 20
        title : "Raja Rani - Nee Yaaro | Lyric Video | Arya, Nayanthara, Jai, Nazriya | G.V. Prakash Kumar | Atlee",
        thumbnailUrl : "/image19.jpg",
        videoUrl : "/video19.3gp",     
        description : " All the videos, songs, images, and graphics used in the video belong to their respective owners and I or this channel does not claim any right over them  ",
        channelId : "ch_8446",
        uploader : "A!",
        views : "6K",
        likes : "8.4K",
        period : "3 years ago",
        uploadDate : "2021-4-12",
        comments : [
            {
                username : "@ChristyP-up6ix",
                text : "Whenever am hearing this song started to thinking about past without reason ..... Everyone have a past but they move on from that ... But this song make us to remember our past",
                likes :"260",
                timestamp : "2 years ago"

            },

            {
                username : "@Kowsi-z9h",
                text : "This songs about meaning ful in my life 💥✨💫   ",
                likes :"10",
                timestamp : "1 year ago"

            },

        ],

        subscription : "153K",
        logoUrl : "/logo19.png",
        category : "Songs",
        categoryId : "11S",
    },

    {
        // 21
        title : "How to use your 24 HOURS in right way✌️||A motivational speech by #jackma",
        thumbnailUrl : "/image20.jpg",
        videoUrl : "/video21.mp4",     
        description : " Time is the most valuable resource we all share equally—everyone gets 24 hours a day. But what separates successful people from the rest is how they use that time. In this video, we dive deep into how to use your 24 hours effectively, drawing powerful lessons from Jack Ma, the founder of Alibaba and one of the most influential entrepreneurs in the world.",
        channelId : "ch_026",
        uploader : "Your Motivation",
        views : "78K",
        likes : "10K",
        period : "10 months ago",
        uploadDate : "2024-10-1",
        comments : [
            {
                username : "@motivational_speech_94",
                text : "Honestly, it breaks my heart how Manifest and Receive by Eva Hartley isn’t getting the attention it deserves.",
                likes :"1020",
                timestamp : "9 months ago"

            },

            {
                username : "@MuhammadAamir-b5d",
                text : "Jack Ma’s perspective on time is truly eye-opening. This video is a great reminder that how we use our 24 hours can shape our entire future. ",
                likes :"165",
                timestamp : "10 days ago"

            },

        ],

        subscription : "50K",
        logoUrl : "/logo20.png",
        category : "Trending",
        categoryId : "09T",
    },

    {
        // 22
        title : "Celebrating 15 Years Of Samantha Promo | Apsara Awards 2025 | This Saturday at 5:30PM | Zee Telugu",
        thumbnailUrl : "/image21.jpg",
        videoUrl : "/video21.mp4",     
        description : " Click here For Free Subscription ► https://bit.ly/subscriberZeeTelugu Follow the ZEE Telugu Channel on WhatsApp ► https://whatsapp.com/channel/0029Va5U... Get notified about our Latest update by Clicking the Bell Icon 🔔#ZeeTelugu #TeluguSerial #Trending #Family #Romantic",
        channelId : "ch_0234",
        uploader : "Zee Telugu",
        views : "1M",
        likes : "1.4K",
        period : "1 month ago",
        uploadDate : "2025-5-20",
        comments : [
            {
                username : "@tarunheroraju",
                text : "Congratulations Samantha garu🎉🎉🎉🎉🎉",
                likes :"1020",
                timestamp : "1 months ago"

            },

            {
                username : "@KasarlaRithika",
                text : "Congratulations, Sam ,you deserve more like this awards and happiness in your life.",
                likes :"15",
                timestamp : "25 days ago"

            },

            {
                username : "@AnilRaji-n8ma",
                text : "We want more more movies from you Sam..we (your diehard fans) are eagerly waiting for your new movies..❤️❤️❤️❤️🔥🔥🔥.",
                likes :"7",
                timestamp : "15 days ago"

            },
             {
                username : "@KasarlaRithika",
                text : "SELFMADE PAN INDIA SUPERSTAR Samantha Ruth Prabhu ✊✊❤️",
                likes :"15",
                timestamp : "25 days ago"

            },

        ],

        subscription : "16.3M",
        logoUrl : "/logo21.png",
        category : "Awards",
        categoryId : "56A",
    },

    {
        // 23
        title : "Finally, India’s Own AI Model! Sarvam Takes the Lead — But With a Twist",
        thumbnailUrl : "/image22.jpg",
        videoUrl : "/video27.mp4",     
        description : " India’s quest for sovereign AI has taken a bold step forward. Sarvam AI, a Bengaluru-based startup, has been selected under the IndiaAI Mission to build India’s own large language model — fluent in Indian languages, multimodal, and ready for deployment at population scale. But as the celebrations began, so did the controversy.",
        channelId : "ch_0208",
        uploader : "AIM TV",
        views : "1M",
        likes : "24K",
        period : "8 months ago",
        uploadDate : "2024-11-7",
        comments : [
            {
                username : "@INSTINCTEDITS-79",
                text : "I hope this succeeds. India has been left way behind by other countries in this AI race.",
                likes :"453",
                timestamp : "23 hours ago"

            },

            {
                username : "@KasarlaRithika",
                text : "Chatgpt is already getting fluent in indian languages.. i just had a conversation in odia. They have quite a milestone to achieve...",
                likes :"10",
                timestamp : "16 days ago"

            },

            {
                username : "@AnilRaji-n8ma",
                text : "please show in charts and side by side comparison how this Indian AI is different from market by comparing against DS, CGPT, etc....",
                likes :"256",
                timestamp : "3 months ago"

            },

        ],

        subscription : "174K",
        logoUrl : "/logo22.png",
        category : "AI",
        categoryId : "587A",
    },

    {
        // 24
        title : "Annan Thangachi Paavangal | Parithabangal",
        thumbnailUrl : "/image23.jpg",
        videoUrl : "/video29.mp4",     
        description : " Annan Thangachi Paavangal is a hilarious new comedy presented by Parithabangal that explores the mischievous and endearing dynamics of a brother and sister relationship.Get ready to join the fun-filled journey of Annan Thangachi Paavangal and experience the joy and laughter of siblinghood like never before!",
        channelId : "ch_021",
        uploader : "Paridhabangal",
        views : "10M",
        likes : "5K+",
        period : "4 months ago",
        uploadDate : "2025-1-20",
        comments : [
            {
                username : "@INSTINCTEDITS-79",
                text : "Matrimony scene is my favorite I can't control laughing🤣😂",
                likes :"453",
                timestamp : "23 hours ago"

            },

            {
                username : "@AnilRaji-n8ma",
                text : "Gopi and Sudhakar combo never disappointed 🔥🔥🔥🔥❤️❤️❤️❤",
                likes :"250",
                timestamp : "3 months ago"

            },

            
        ],

        subscription : "6.17K",
        logoUrl : "/logo23.png",
        category : "Movies",
        categoryId : "51M",
    },


    {
        // 25
        title : "Title BGM (Mannipaaya) | Vinnaithaandi Varuvaayaa | A R Rahman | Love BGM♥",
        thumbnailUrl : "/image24.jpg",
        videoUrl : "/video6.mp4",     
        description : " Song Name: Love BGM ♫♫♫✪ Movie Name: Vinnaithaandi Varuvaayaa Music Composer: A R Rahman ♔ Thank You! For watching this video Please leave a like if you enjoyed the video & Subscribe for more Videos.!",
        channelId : "ch_041",
        uploader : "Echo of Love",
        views : "5M",
        likes : "5K+",
        period : "6 years ago",
        uploadDate : "2019-1-20",
        comments : [
            {
                username : "@ashamurali69",
                text : "After listening this bgm I was crying without any reason the music took to me somewhere it was so good feeling I can't stop crying 😢😢",
                likes :"79",
                timestamp : "2 months ago"

            },

            {
                username : "@periyasamymaadhu5",
                text : "A.R. Rahman is not a music director. He was a father of the music",
                likes :"134",
                timestamp : "1 year ago"

            },

             {
                username : "@milanshiv",
                text : "A.R.R God of indian music.the one who entirely changed indian music..1st movie national award to oscar award..",
                likes :"1K",
                timestamp : "3 year ago"

            },

            
        ],

        subscription : "29.8K",
        logoUrl : "/logo24.png",
        category : "Songs",
        categoryId : "08S",
    },

    {
        // 26
        title : "#01 Introduction to Java Programming Tutorial Series | For Beginners in Tamil | Error Makes Clever",
        thumbnailUrl : "/image25.jpg",
        videoUrl : "/video19.3gp",     
        description : " Welcome to our Java tutorial series on YouTube! In this series, I will be guiding you through the Java programming language, starting from the very basics and progressing towards more advanced concepts, all delivered in an engaging and accessible manner. ",
        channelId : "ch_230",
        uploader : "Error makes clever",
        views : "120K",
        likes : "100K+",
        period : "1 year ago",
        uploadDate : "2024-5-30",
        comments : [
            {
                username : "@Jelvix",
                text : "Thank you for this video! face-fuchsia-wide-eyes It's very helpful, especially for beginners. ",
                likes :"6",
                timestamp : "10 months ago"

            },

            {
                username : "@LearnwithSSRK",
                text : "React js video podunga bro",
                likes :"10+",
                timestamp : "2 years ago"

            },
            
        ],

        subscription : "89K",
        logoUrl : "/logo25.png",
        category : "Programming",
        categoryId : "23P",
    },

    {
        // 27
        title : "Bridge Collapse in Anand Adds to Gujarat’s Alarming Pattern of Structural Failures",
        thumbnailUrl : "/image26.jpg",
        videoUrl : "/video21.mp4",     
        description : "Over the past years, Gujarat has seen multiple bridge collapse incidents—raising safety concerns. From the 2022 Morbi disaster that claimed 141 lives to the 2025 Anand collapse and the 2023 Palanpur incident, these cases highlight recurring structural failures despite repeated investigations and official assurances of preventive measures.",
        channelId : "ch_270",
        uploader : "The Indian Express",
        views : "250K",
        likes : "89K",
        period : "2 days ago",
        uploadDate : "2025-6-2",
        comments : [
            {
                username : "@projectfdk7544x",
                text : "How shameless these  administrative authorities are !! They are justifying their current action . Very poor show !! ",
                likes :"10",
                timestamp : "12 hours ago"

            },

            {
                username : "@rajeevb2605",
                text : "Bridges must have cement metal and steel in sufficient proportion.Otherwise it will collapse.",
                likes :"25",
                timestamp : "1 day ago"

            },

            {
                username : "@winstoncunningham4513",
                text : "It's time to start upgrading our safety standards, Ensure each one accountable for every damages and loss of life. This is really becoming a very disastrous period, as common citizens we are forced to face bad roads, flyovers, bridges collapsing, flooding, rail accidents and as we speaks out we have lost another airforce jet.",
                likes :"164",
                timestamp : "23 hours ago"

            },
            
        ],

        subscription : "110K+",
        logoUrl : "/logo18.png",
        category : "News",
        categoryId : "20N",
    },


    {
        // 28
        title : "The Fantastic Four: First Steps | Official Clip 'I Herald Galactus' | In Theaters July 25",
        thumbnailUrl : "/image27.jpg",
        videoUrl : "/video27.mp4",     
        description : "Galactus is coming.Watch this new clip from Marvel Studios’ The Fantastic Four: First Steps and experience the film in theaters July 25. Get tickets now: https://fandango.com/FantasticFour ",
        channelId : "ch_254",
        uploader : "Marvel Entertainment",
        views : "200K",
        likes : "102K",
        period : "1 days ago",
        uploadDate : "2025-6-8",
        comments : [
            {
                username : "@projectfdk7544x",
                text : "I love how her speech sounds somewhat apologetic. Galactus takes no pleasure in destroying lives, however, he still needs to feed.  ",
                likes :"27",
                timestamp : "23 hours ago"

            },

            {
                username : "@rajeevb2605",
                text : "I'll admit, her voice is quite incredible. No quippy jokes or anything to ruin the tension. Just pure ear candy.",
                likes :"80",
                timestamp : "30 mins ago"

            },

            
        ],

        subscription : "20K+",
        logoUrl : "/logo6.png",
        category : "Movies",
        categoryId : "10M",
    },

    {
        // 29
        title : "Nayanthara Wins Most Versatile Actress Award at Dadasaheb Phalke International Film Festival 2024",
        thumbnailUrl : "/image28.jpg",
        videoUrl : "/video21.mp4",     
        description : "The Most Versatile Actress Award was coveted to Nayanthara for her magnificent contributions to Indian cinema. The actress is a cinema luminary known for tackling every role with sheer skill and talent. With each new production, the audience gets to see another side of Nayanthara’s repertoire. For her marvelous versatility, she was felicitated at DPIFF 2024.",
        channelId : "ch_18",
        uploader : "Dadasaheb Phalke International Film Festival",
        views : "876K",
        likes : "579K+",
        period : "1 year ago",
        uploadDate : "2025-6-8",
        comments : [
            {
                username : "@suryanshikaran4562",
                text : "Every South super star is making surprised by their  nice hindi..😊",
                likes :"52",
                timestamp : "10 months ago"

            },

            {
                username : "@rajeevb2605",
                text : "I'll admit, her voice is quite incredible. No quippy jokes or anything to ruin the tension. Just pure ear candy.",
                likes :"80",
                timestamp : "30 mins ago"

            },

            
        ],

        subscription : "125K",
        logoUrl : "/logo12.png",
        category : "Awards",
        categoryId : "1A9",
    },


    {
        // 30
        title : "What's Education For?",
        thumbnailUrl : "/image29.jpg",
        videoUrl : "/video29.mp4",     
        description : "The greatest problem of the modern education system is that it doesn't focus on systematically preparing students for many aspects of the real challenge out there: Life itself. Enjoying our Youtube videos? Get full access to all our audio content, videos, and thousands of thought-provoking articles, conversation cards and more with The School of Life Subscription: https://t.ly/oIIpf ",
        channelId : "ch_321",
        uploader : "The School Life",
        views : "142K",
        likes : "80K+",
        period : "8 year ago",
        uploadDate : "2017-6-8",
        comments : [
            {
                username : "@robimwita76",
                text : "I personally believe children and students should be taught to think for themselves. They should learn to debate, solve problems and be encouraged",
                likes :"110K",
                timestamp : "1 year ago"

            },

            {
                username : "@kelvinkipngetich5739",
                text : "Education isn't just about getting knowledge but also gives rise to exploring what one might do in future",
                likes :"165",
                timestamp : "3 years ago"

            },

            {
                username : "@danielm3670",
                text : "I couldn't disagree more. The goal of education should NOT be about creating workers or psychoanalyzing students desires and relationships! ",
                likes :"20+",
                timestamp : "4 years ago"

            },

            
        ],

        subscription : "20K",
        logoUrl : "/logo8.png",
        category : "Education",
        categoryId : "31E",
    },

    {
        // 31
        title : "IDHU VARAI 🎙️ | Andrea Jeremiah x Sam Vishal | #Goa #u1longdrivetocolombo 🎶",
        thumbnailUrl : "/image30.jpg",
        videoUrl : "/video19.3gp",     
        description : "The first show of the year,U1's Long Drive To Colombo 2024,Brought together a record-breaking crowd and unforgettable vibes!Colombo, you were magical! ✨Thank you for the love, the energy, and making this night one to remember! 💖🎉  ",
        channelId : "ch_38",
        uploader : "Sathish Production",
        views : "1450",
        likes : "110",
        dislikes : 2,
        period : "1 year ago",
        uploadDate : "22025-6-4",
        comments : [
            {
                username : "@robimwita76",
                text : "Wow it has been a long time, I hear the full version of the song.  Very nice voice and presentation both of them. Thank you",
                likes :"11",
                timestamp : "1 month ago"

            },

            {
                username : "@maryann2205",
                text : "Beautiful & melodious song & performance🎉",
                likes :"165",
                timestamp : "2 months ago"

            },

            {
                username : "@velsmusicacad",
                text : "Sam you just awesome 👍😎  ",
                likes :"20+",
                timestamp : "4 months ago"

            },

            
        ],

        subscription : "8K",
        logoUrl : "/logo14.png",
        category : "Song",
        categoryId : "34S",
    },


    {
        // 32
        title : "Vikramadithyan | Most inspirational scene | Mazhavil Manorama",
        thumbnailUrl : "/image31.jpg",
        videoUrl : "/video6.mp4",     
        description : "Vikramadithyan is a 2014 Malayalam comedy-drama film directed by Lal Jose. The film stars Dulquer Salmaan, Unni Mukundan and Namitha Pramod in the lead roles, along with an extended cameo appearance of Nivin Pauly.Watch this movie scene",
        channelId : "ch_38",
        uploader : " Mazhavil Manorama",
        views : "100K+",
        likes : "110",
        dislikes : 0,
        period : "1 year ago",
        uploadDate : "2025-6-4",
        comments : [
            {
                username : "@robimwita76",
                text : "ഈ സിനിമയിൽ നിവിൻ പോളി ചെയ്ത കഥാപത്രമാണ് ഒരു യഥാർത്ഥ സുഹൃത്തിന്റെ  നിർവചനം. ",
                likes :"110",
                timestamp : "2 month ago"

            },

            {
                username : "@maryann2205",
                text : "No one can write movie scripts like Malayalis! Hats off!!",
                likes :"1243",
                timestamp : "2 months ago"

            },

            
        ],

        subscription : "278K",
        logoUrl : "/logo10.png",
        category : "Movie",
        categoryId : "32M",
    },

    {
        // 33
        title : "Icon Star Allu Arjun Superb Speech @ Telangana Gaddar Film Awards Event",
        thumbnailUrl : "/image32.jpg",
        videoUrl : "/video27.mp4",     
        description : "Watch #IconStar #AlluArjun Superb Speech @ #TelanganaGaddarFilmAwardsEvent For more videos about Telugu cinema, subscribe to our YouTube channel ► https://goo.gl/N1GMjx Don't forget to push the Bell 🔔 icon to never miss an update. ",
        channelId : "ch_38",
        uploader : "Mana Stars",
        views : "12K+",
        likes : "10K",
        dislikes : 1,
        period : "1 month ago",
        uploadDate : "2025-6-19",
        comments : [
            {
                username : "@robimwita76",
                text : "Syndicate power 🔥🔥🔥😂😂😂 Love from Odisha 🙏",
                likes :"110",
                timestamp : "2 days ago"

            },

            {
                username : "@maryann2205",
                text : "No one can write movie scripts like Malayalis! Hats off!!",
                likes :"1243",
                timestamp : "2 months ago"

            },

            
        ],

        subscription : "23K",
        logoUrl : "/logo5.png",
        category : "Awards",
        categoryId : "34A",
    },

    {
        // 34
        title : "Sisters Grace: Pooja Kannan & Sai Pallavi’s Enchanting Dance at the Sangeet",
        thumbnailUrl : "/image33.jpg",
        videoUrl : "/video21.mp4",     
        description : "Experience the mesmerizing dance performance by sisters Pooja Kannan and Sai Pallavi at Pooja’s sangeet! Their graceful moves and seamless chemistry left the crowd in awe as they danced with joy, elegance, and the pure love of family. This unforgettable moment added a magical touch to the night, as the sisters’ bond radiated through every step and smile. Join us in reliving this beautiful highlight from Pooja's wedding celebrations! 💫 ",
        channelId : "ch_12",
        uploader : "Vivek Krishna Photoshop",
        views : "230K+",
        likes : "38K",
        dislikes : 0,
        period : "5 month ago",
        uploadDate : "2025-1-10",
        comments : [
            {
                username : "@KimmansCrafts",
                text : "She wanted her sister to shine on her special day. That’s why she made the choreography simple and always kept her at the front ❤❤❤❤. ",
                likes :"1240",
                timestamp : "1 month ago"

            },

            
        ],

        subscription : "560K",
        logoUrl : "/logo2.png",
        category : "Trending",
        categoryId : "31T",
    },


      {
        // 35
        title : "Chill Parkour | Storror Parkour Pro",
        thumbnailUrl : "/image34.jpg",
        videoUrl : "/video6.mp4",     
        description : " the animations are top notch but the perfection in the cloth sim gives the entire presentation this uncanny feeling!",
        channelId : "ch_12",
        uploader : "ShawnyFishy",
        views : "230K+",
        likes : "38K",
        dislikes : 0,
        period : "5 month ago",
        uploadDate : "2025-1-10",
        comments : [
            {
                username : "@KimmansCrafts",
                text : "Imagine if Ubisoft was a company that still cared about making a good game and put effort into a parkour system like this. ",
                likes :"1247",
                timestamp : "1 month ago"

            },

            {
                username : "@BlaccX",
                text : "Add this parkour to a game like watchdogs, sleeping dogs, or gta, add martial arts & shooting & it’ll be the game of the year 🔥",
                likes :"1247",
                timestamp : "1 month ago"

            },

            {
                username : "@KimmansCrafts",
                text : "Amazing propriety and physics of the man. At first I thought he was a real madman.",
                likes :"1247",
                timestamp : "1 month ago"

            },

            
        ],

        subscription : "560K",
        logoUrl : "/logo16.png",
        category : "Gaming",
        categoryId : "3G2",
    },

     {
        // 36
        title : "I Made my first Game in Scratch",
        thumbnailUrl : "/image36.jpg",
        videoUrl : "/video19.3gp",     
        description : " Go from zero to a full stack web developer in 12 months. This step-by-step roadmap covers the essential skills and latest technologies to become a web developer in 2024.  ",
        channelId : "ch_12",
        uploader : "Programming with Mosh",
        views : "230K",
        likes : "38K",
        dislikes : 0,
        period : "5 month ago",
        uploadDate : "2025-1-10",
        comments : [
            {
                username : "@KimmansCrafts",
                text : "Imagine if Ubisoft was a company that still cared about making a good game and put effort into a parkour system like this. ",
                likes :"1247",
                timestamp : "1 month ago"

            },

            {
                username : "@BlaccX",
                text : "Add this parkour to a game like watchdogs, sleeping dogs, or gta, add martial arts & shooting & it’ll be the game of the year 🔥",
                likes :"1247",
                timestamp : "1 month ago"

            },

            {
                username : "@KimmansCrafts",
                text : "Amazing propriety and physics of the man. At first I thought he was a real madman.",
                likes :"1247",
                timestamp : "1 month ago"

            },

            
        ],

        subscription : "560K",
        logoUrl : "/logo24.png",
        category : "Programming",
        categoryId : "3G2",
    },

    {
        // 37
        title : "Jal Jal Jal Osai - Video Song | Manam Kothi Paravai | Siva Karthikeyan | Athmiya Rajan | Sun Music",
        thumbnailUrl : "/image37.jpg",
        videoUrl : "/video21.mp4",     
        description : " Presenting the Official Video Song of 'Jal Jal Jal Osai'  from the Mega hit movie 'Manam Kothi Paravai' starring Siva Karthikeyan and Athmiya . Directed by S.Ezhil & Music composed by D.Imman.  ",
        channelId : "ch_12",
        uploader : "Sun Music",
        views : "230K",
        likes : "38K",
        dislikes : 0,
        period : "5 month ago",
        uploadDate : "2025-1-10",
        comments : [
            {
                username : "@KimmansCrafts",
                text : "13 year old song still #17 on trending❤",
                likes :"1247",
                timestamp : "1 month ago"

            },

            {
                username : "@BlaccX",
                text : "Super My Favourite songs Jal Jal Jal Osai 😍😘👌 Vera level Sun music ❤❤❤❤",
                likes :"1247",
                timestamp : "1 month ago"

            },

            {
                username : "@KimmansCrafts",
                text : "Best Of Tamil Cinema 🔥",
                likes :"1247",
                timestamp : "1 month ago"

            },

            
        ],

        subscription : "560K",
        logoUrl : "/logo25.png",
        category : "Song",
        categoryId : "3G2",
    },

    {
        // 38
        title : "What Is AI? | Artificial Intelligence | What is Artificial Intelligence? | AI In 5 Mins |Simplilearn",
        thumbnailUrl : "https://i.ytimg.com/vi/ad79nYk2keg/maxresdefault.jpg",
        videoUrl : "/video6.mp4",     
        description : " This video on What is Artificial Intelligence will give you a brief overview of artificial intelligence as a technology in just 5 minutes. We will start with a minor introduction to artificial intelligence in which we will know what is artificial intelligence with the help of examples. Moving ahead we will see what are the uses of AI, what is strong AI and what is weak AI.   ",
        channelId : "ch_12",
        uploader : "SimpliLearn",
        views : "230K",
        likes : "38K",
        dislikes : 0,
        period : "5 month ago",
        uploadDate : "2025-1-10",
        comments : [
            {
                username : "@KimmansCrafts",
                text : "This video is a great way to introducing and explaining artificial intelligence. It was simple and informative, and I really enjoy the visuals that connect to the narration to explaining the subject. ",
                likes :"1247",
                timestamp : "1 month ago"

            },

            {
                username : "@BlaccX",
                text : "Doremon is the best example of AI with emotions and emotions developing feature 😅",
                likes :"1247",
                timestamp : "1 month ago"

            },

            {
                username : "@KimmansCrafts",
                text : "D and I am very eager and excited to work on AI with emotional intelligence",
                likes :"1247",
                timestamp : "1 month ago"

            },

            
        ],

        subscription : "560K",
        logoUrl : "/logo20.png",
        category : "AI",
        categoryId : "3G2",
    },

    {
        // 39
        title : "Education in India | BBC Studios",
        thumbnailUrl : "https://i.ytimg.com/vi/aKspt58JbsM/maxresdefault.jpg",
        videoUrl : "/video29.mp4",     
        description : " Sanjeev visits some impressive young students taking time out of their school day to help teach street children the same syllabus. That's recycled learning, Indian style, and it makes a big impression on our presenter in this BBC Worldwide video clip.  ",
        channelId : "ch_12",
        uploader : "SBS Dateline",
        views : "230K",
        likes : "38K",
        dislikes : 0,
        period : "3 month ago",
        uploadDate : "2025-1-10",
        comments : [
            {
                username : "@KimmansCrafts",
                text : "God bless India. Indian kids, study well, rule the world. The world needs more engineers, scientists and Doctors!  Don't study about hatred! Don't think about politics. Treat every human being with love and respect. ",
                likes :"1247",
                timestamp : "1 month ago"

            },

            {
                username : "@BlaccX",
                text : "The level of school education is outstanding in India. We do lack in quality of education in the higher education.",
                likes :"1247",
                timestamp : "1 month ago"

            },

            
        ],

        subscription : "560K",
        logoUrl : "/logo4.png",
        category : "Education",
        categoryId : "3G2",
    },


    {
        // 40
        title : "Deepika Padukone argues about culture | Bajirao Mastani",
        thumbnailUrl : "https://i.ytimg.com/vi/Jt1PfxSpeGk/maxresdefault.jpg",
        videoUrl : "/video27.mp4",     
        description : "Stream & watch back to back Full Movies only on Eros Now - https://goo.gl/GfuYux Check out this scene from the movie Bajirao Mastani.Cast: Ranveer Singh, Deepika Padukone & Priyanka Chopra Directed by: Sanjay Leela Bhansali Produced by: Kishore Lulla & Sanjay Leela Bhansali For all the updates on the movie:",
        channelId : "ch_12",
        uploader : "EROS new south",
        views : "230K",
        likes : "38K",
        dislikes : 0,
        period : "5 month ago",
        uploadDate : "2025-1-10",
        comments : [
            {
                username : "@KimmansCrafts",
                text : "Tamil language so beautiful.. Love from Rajasthan ",
                likes :"1247",
                timestamp : "1 month ago"

            },

            {
                username : "@BlaccX",
                text : "The way they deliver the dialogue in Tamil is fab",
                likes :"1247",
                timestamp : "1 month ago"

            },

            
        ],

        subscription : "560K",
        logoUrl : "/logo13.png",
        category : "Movie",
        categoryId : "3G2",
    },


     
    {
        // 42
        title : "Tujh Mein Rab Dikhta Hai Song | Rab Ne Bana Di Jodi | Shah Rukh Khan, Anushka Sharma | Roop Kumar",
        thumbnailUrl : "https://i.ytimg.com/vi/qoq8B8ThgEM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD-cb9c5K0NN_QRBdgYbfRoBfghug",
        videoUrl : "/video19.3gp",     
        description : "This is what happened to Surinder Sahni (Shah Rukh Khan) - a simple, clean hearted, honest man, leading a humdrum life, when he meets his total opposite and finds love in the flamboyant, fun-loving, vivacious - Taani (Anushka Sharma) for whom the whole world is her canvas and she paints her own life with the colours of rainbow all until unforeseen circumstances changes it all and brings them together.  ",
        channelId : "ch_12",
        uploader : "YRF",
        views : "230K",
        likes : "38K",
        dislikes : 0,
        period : "5 month ago",
        uploadDate : "2025-1-10",
        comments : [
            {
                username : "@KimmansCrafts",
                text : "Vedanta could be frontrunner for rare earth minerals in indian context. These things will happen in near future more often.",
                likes :"1247",
                timestamp : "1 month ago"

            },

            {
                username : "@BlaccX",
                text : "The way they deliver the dialogue in Tamil is fab",
                likes :"1247",
                timestamp : "1 month ago"

            },

            
        ],

        subscription : "560K",
        logoUrl : "/logo7.png",
        category : "Song",
        categoryId : "3G2",
    },




]

// insertMany

export async function seedDB() {
  try {
    const count = await videoModel.countDocuments();

    if (count === 0) {
      await videoModel.insertMany(dummyData);
      console.log("✅ DB seeded with initial videos");
    } else {
      console.log("⚡ DB already has videos, skipped seeding");
    }
  } catch (err) {
    console.error("❌ Error while seeding DB:", err);
  }
}
