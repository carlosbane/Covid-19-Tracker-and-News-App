const express = require("express");
const fetch = require("node-fetch");
require('dotenv').config();

const app = express();

app.use(express.json());

const data = [
  {
    data: {
      totalSamplesTested: "> 7153",
      totalConfirmedCases: 665,
      discharged: 188,
      death: 22,
      states: [
        {
          state: "Lagos",
          _id: "0ndQPb2uV",
          confirmedCases: null,
          casesOnAdmission: 266,
          discharged: 97,
          death: 13,
        },
        {
          state: "AbujaFCT",
          _id: "OJtlymJtjk",
          confirmedCases: 89,
          casesOnAdmission: 51,
          discharged: 35,
          death: 3,
        },
        {
          state: "Kano",
          _id: "Mp5IPFwEQn",
          confirmedCases: 59,
          casesOnAdmission: 58,
          discharged: 0,
          death: 1,
        },
        {
          state: "Osun",
          _id: "dFqcsrJ1E1",
          confirmedCases: 20,
          casesOnAdmission: 2,
          discharged: 18,
          death: 0,
        },
        {
          state: "Oyo",
          _id: "2AJjYh8JHM",
          confirmedCases: 16,
          casesOnAdmission: 11,
          discharged: 5,
          death: 0,
        },
        {
          state: "Edo",
          _id: "YGGV3I3pFQ",
          confirmedCases: 15,
          casesOnAdmission: 7,
          discharged: 7,
          death: 1,
        },
        {
          state: "Ogun",
          _id: "U6OIkFAY3J",
          confirmedCases: 12,
          casesOnAdmission: 7,
          discharged: 5,
          death: 0,
        },
        {
          state: "Katsina",
          _id: "sByUxdssRH",
          confirmedCases: 12,
          casesOnAdmission: 11,
          discharged: 0,
          death: 1,
        },
        {
          state: "Kwara",
          _id: "P42BqrF1w6",
          confirmedCases: 9,
          casesOnAdmission: 7,
          discharged: 2,
          death: 0,
        },
        {
          state: "AkwaIbom",
          _id: "Q-LG3fmnZn",
          confirmedCases: 9,
          casesOnAdmission: 5,
          discharged: 3,
          death: 1,
        },
        {
          state: "Kaduna",
          _id: "ADv97TqVyp",
          confirmedCases: 9,
          casesOnAdmission: 5,
          discharged: 4,
          death: 0,
        },
        {
          state: "Bauchi",
          _id: "4SX4571ck0",
          confirmedCases: 7,
          casesOnAdmission: 2,
          discharged: 5,
          death: 0,
        },
        {
          state: "Gombe",
          _id: "DWfgPPpw1L",
          confirmedCases: 5,
          casesOnAdmission: 5,
          discharged: 0,
          death: 0,
        },
        {
          state: "Delta",
          _id: "iCb_FQ00Lo",
          confirmedCases: 4,
          casesOnAdmission: 3,
          discharged: 0,
          death: 1,
        },
        {
          state: "Ekiti",
          _id: "BYgQtztHXw",
          confirmedCases: 4,
          casesOnAdmission: 2,
          discharged: 2,
          death: 0,
        },
        {
          state: "Borno",
          _id: "k1j5G2MBWy",
          confirmedCases: 3,
          casesOnAdmission: 2,
          discharged: 0,
          death: 1,
        },
        {
          state: "Ondo",
          _id: "WzOGQDPaOer",
          confirmedCases: 3,
          casesOnAdmission: 2,
          discharged: 1,
          death: 0,
        },
        {
          state: "Abia",
          _id: "hV7kTJ_rspg",
          confirmedCases: 2,
          casesOnAdmission: 2,
          discharged: 0,
          death: 0,
        },
        {
          state: "Enugu",
          _id: "b-k5yC4jaJ-",
          confirmedCases: 2,
          casesOnAdmission: 0,
          discharged: 2,
          death: 0,
        },
        {
          state: "Rivers",
          _id: "JJ_F4SUN-Kk",
          confirmedCases: 2,
          casesOnAdmission: 0,
          discharged: 2,
          death: 0,
        },
        {
          state: "Niger",
          _id: "p_y88hJEjRf",
          confirmedCases: 2,
          casesOnAdmission: 2,
          discharged: 0,
          death: 0,
        },
        {
          state: "Jigawa",
          _id: "w0BE6Rw-Fnf",
          confirmedCases: 2,
          casesOnAdmission: 2,
          discharged: 0,
          death: 0,
        },
        {
          state: "Benue",
          _id: "_OUly8C_lJP",
          confirmedCases: 1,
          casesOnAdmission: 1,
          discharged: 0,
          death: 0,
        },
        {
          state: "Anambra",
          _id: "FiWPKqX8DgP",
          confirmedCases: 1,
          casesOnAdmission: 1,
          discharged: 0,
          death: 0,
        },
        {
          state: "Sokoto",
          _id: "iJG5dp--lay",
          confirmedCases: 1,
          casesOnAdmission: 1,
          discharged: 0,
          death: 0,
        },
      ],
    },
  },
];

const news = [
  {
    status: "ok",
    totalResults: 129117,
    articles: [
      {
        source: { id: null, name: "Lifehacker.com" },
        author: "David Murphy",
        title: "Fight Coronavirus BS in Your Facebook Newsfeed",
        description:
          "If you get your news from Facebook, that’s problem number one. Why? Well, it would take an effort of pandemic-response-sized proportions to get people to stop sharing bullshit on Facebook. And you see how well our pandemic response is going...Read more...",
        url:
          "https://lifehacker.com/how-to-help-facebook-fight-coronavirus-bs-in-your-newsf-1842925605",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/vmv9xpqz0tychsbkfkcb.png",
        publishedAt: "2020-04-20T14:00:00Z",
        content:
          "If you get your news from Facebook, thats problem number one. Why? Well, it would take an effort of pandemic-response-sized proportions to get people to stop sharing bullshit on Facebook. And you see how well our pandemic response is going...\r\nI know that you… [+2260 chars]",
      },
      {
        source: { id: "engadget", name: "Engadget" },
        author: "Christine Fisher",
        title: "Games Done Quickly's stream for COVID-19 relief has begun",
        description:
          "Today through April 19th, you can tune into Games Done Quickly’s (GDQ) streamed COVID-19 charity event to watch some of the fastest speedrunners in the world race through new and classic games and raise money for the coronavirus pandemic. The event, Corona Re…",
        url:
          "https://www.engadget.com/games-done-quickly-covid19-charity-stream-160821853.html",
        urlToImage:
          "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=80&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-04%2F925d4480-80c5-11ea-ab76-21c59c8ce9e0&client=amp-blogside-v2&signature=4d40f9de18ba5f8c74def71d273681aacc5d633d",
        publishedAt: "2020-04-17T16:08:21Z",
        content:
          "Today through April 19th, you can tune into Games Done Quickly’s (GDQ) streamed COVID-19 charity event to watch some of the fastest speedrunners in the world race through new and classic games and raise money for the coronavirus pandemic. The event, Corona Re… [+736 chars]",
      },
      {
        source: { id: "engadget", name: "Engadget" },
        author: "Jessica Conditt",
        title: "The terrible, fantastic life of AbleGamers COO Steven Spohn",
        description:
          "When Twitch streamer DrDisrespect won the Trending Gamer prize at the 2017 Game Awards, there was a tiny riot on Twitter. There's always a buzz of hashtag activity after a winner is announced as people congratulate or disagree with the pick, but this time aro…",
        url:
          "https://www.engadget.com/2020-03-25-steven-spohn-ablegamers-sxsw-gaming-interview.html",
        urlToImage:
          "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=80&image_uri=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2Fegi33Bok9k6qjqVj7t.S4w--%7EB%2Fdz0xNjAwO2g9MTAyMzthcHBpZD15dGFjaHlvbg--%2Fhttps%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D999%252C639%252C0%252C27%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1023%26image_uri%3Dhttps%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-03%2F397f4410-6eb1-11ea-9f3c-17ef3eb45a6b%26client%3Da1acac3e1b3290917d92%26signature%3D2f46b493c54ee48e4eba31ce42ef7d1dc5a25c9e&client=amp-blogside-v2&signature=a32bcad9f7f4811a14cf6d7db65537be24967d9f",
        publishedAt: "2020-03-25T18:00:00Z",
        content:
          "This story is just one reason he wanted to get on-stage at SXSW and deliver a speech about finding strength in any body. Across all forms of media, people with disabilities have fewer role models than the able-bodied population, and also fewer tools designed … [+4704 chars]",
      },
      {
        source: { id: "engadget", name: "Engadget" },
        author: "Kris Naudus",
        title: "'Picard' finally shows us how Star Trek’s technology evolves",
        description:
          "This article contains spoilers for the first season of 'Star Trek: Picard' up to episode nine. Star Trek: Picard is the show I've been looking forward to for 17 years. Not because I was particularly interested in finding out what happened to Picard, Troi, Rik…",
        url:
          "https://www.engadget.com/2020-03-25-star-trek-picard-technology-evolution.html",
        urlToImage:
          "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=80&image_uri=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FuOsxX.PZOZltLm5pOe8UfQ--%7EB%2Fdz0xNjAwO2g9NjcwO2FwcGlkPXl0YWNoeW9u%2Fhttps%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-03%2F2d5a7c40-6ea7-11ea-afe5-55e26702fda3%26client%3Da1acac3e1b3290917d92%26signature%3D46c29e727e5f60ef8ae9e892c099ff8dca531795&client=amp-blogside-v2&signature=e53b25e488c72265383127c9ef902b1b15cd7d6d",
        publishedAt: "2020-03-25T17:00:00Z",
        content:
          "Over seven seasons various TNG episodes continued to explore what the holodeck could do. Deep Space Nine (DS9) even gave us a recurring holographic character, lounge singer Vic Fontaine. But it was Voyager that made a sentient hologram part of the main cast, … [+3534 chars]",
      },
      {
        source: { id: "the-verge", name: "The Verge" },
        author: "Andrew Marino",
        title: "We need to start modeling alternative futures",
        description:
          "Verge editor-in-chief Nilay Patel talks to Amy Webb, founder and CEO of The Future Today Institute about whether we could have predicted the COVID-19 outbreak, how it can change trends in the future, and how it may even accelerate trends like AI and cloud-bas…",
        url:
          "https://www.theverge.com/2020/3/31/21201103/amy-webb-futurist-predictions-interview-vergecast-podcast",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/QK7FebeRsmqn11_5owsu7DawmQo=/0x206:1650x1070/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19861054/FTI_Trends_2020.jpg",
        publishedAt: "2020-03-31T20:28:16Z",
        content:
          "The Future Today Institute We’re continuing our Vergecast interview series remotely during the COVID-19 pandemic and this week, Verge editor-in-chief Nilay Patel sits down via Skype with Amy Webb, the founder and CEO of The Future Today Institute. Amy is also… [+7397 chars]",
      },
      {
        source: { id: "techcrunch", name: "TechCrunch" },
        author: "Natasha Lomas",
        title: "It’s still easy to find coronavirus mask ads on Facebook",
        description:
          "Ads for face masks are still appearing on Facebook, Instagram and Google, according to a review of the platforms carried out by the Tech Transparency Project (TTP). This despite pledges by the platforms that they would stamp out ads which seek to profit from …",
        url:
          "http://techcrunch.com/2020/03/26/its-still-easy-to-find-coronavirus-mask-ads-on-facebook/",
        urlToImage:
          "https://techcrunch.com/wp-content/uploads/2020/03/GettyImages-1207693087-1.jpg?w=570",
        publishedAt: "2020-03-26T17:09:40Z",
        content:
          "Ads for face masks are still appearing on Facebook, Instagram and Google, according to a review of the platforms carried out by the Tech Transparency Project (TTP). This despite pledges by the platforms that they would stamp out ads which seek to profit from … [+6484 chars]",
      },
      {
        source: { id: "techcrunch", name: "TechCrunch" },
        author: "Ingrid Lunden",
        title:
          "Bringg nabs $30M to expand its delivery logistics platform used by Walmart and others",
        description:
          "Over the last several years, delivery services have become a key component of how retailers, or anyone selling or distributing products and services, do business. Now, with a global health pandemic in full swing keeping people indoors (and away from physical …",
        url:
          "http://techcrunch.com/2020/04/07/bringg-nabs-30m-to-expand-its-delivery-logistics-platform-used-by-walmart-and-others/",
        urlToImage:
          "https://techcrunch.com/wp-content/uploads/2019/05/NextDay-Delivery-Box-Image.jpg?w=569",
        publishedAt: "2020-04-07T10:58:30Z",
        content:
          "Over the last several years, delivery services have become a key component of how retailers, or anyone selling or distributing products and services, do business. Now, with a global health pandemic in full swing keeping people indoors (and away from physical … [+5765 chars]",
      },
      {
        source: { id: "techcrunch", name: "TechCrunch" },
        author: "Natasha Lomas",
        title:
          "An EU coalition of techies is backing a “privacy-preserving” standard for COVID-19 contacts tracing",
        description:
          "A European coalition of techies and scientists drawn from at least eight countries, and led by Germany’s Fraunhofer Heinrich Hertz Institute for telecoms (HHI), is working on contacts-tracing proximity technology for COVID-19 that’s designed to comply with th…",
        url:
          "http://techcrunch.com/2020/04/01/an-eu-coalition-of-techies-is-backing-a-privacy-preserving-standard-for-covid-19-contacts-tracing/",
        urlToImage:
          "https://techcrunch.com/wp-content/uploads/2020/03/GettyImages-1210900116.jpeg?w=640",
        publishedAt: "2020-04-01T21:16:26Z",
        content:
          "A European coalition of techies and scientists drawn from at least eight countries, and led by Germany’s Fraunhofer Heinrich Hertz Institute for telecoms (HHI), is working on contacts-tracing proximity technology for COVID-19 that’s designed to comply with th… [+13151 chars]",
      },
      {
        source: { id: null, name: "Gizmodo.com" },
        author: "Alyse Stanley",
        title:
          "Google Boots InfoWars App Off Play Store Over Bogus Coronavirus Claims",
        description:
          "Google has finally kicked the Infowars app from its Play Store, the company confirmed to multiple outlets Friday. The tech giant’s app store was one of the last major bastions for conspiracy theorist Alex Jones, as his show (and all the extremist views and ta…",
        url:
          "https://gizmodo.com/google-boots-infowars-app-off-play-store-over-bogus-cor-1842537116",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bmnocuxcruxyci2q0hjt.jpg",
        publishedAt: "2020-03-28T05:01:00Z",
        content:
          "Google has finally kicked the Infowars app from its Play Store, the company confirmed to multipleoutlets Friday. The tech giants app store was one of the last major bastions for conspiracy theorist Alex Jones, as his show (and all the extremist views and tain… [+2585 chars]",
      },
      {
        source: { id: null, name: "Gizmodo.com" },
        author: "Matt Novak",
        title:
          "Louisiana Could Run Out of Ventilators Next Week As Covid-19 Deaths Spike",
        description:
          "The Governor of Louisiana, John Bel Edwards, warned on Wednesday that the state could run out of life-saving ventilators by next week after the number of covid-19 cases spiked dramatically in the past few days. Louisiana has currently identified at least 1,78…",
        url:
          "https://gizmodo.com/louisiana-could-run-out-of-ventilators-next-week-as-cov-1842504708",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/j1upbylv9ksb4wcxagbo.jpg",
        publishedAt: "2020-03-26T11:45:00Z",
        content:
          "The Governor of Louisiana, John Bel Edwards, warned on Wednesday that the state could run out of life-saving ventilators by next week after the number of covid-19 cases spiked dramatically in the past few days. Louisiana has currently identified at least 1,78… [+5193 chars]",
      },
      {
        source: { id: null, name: "Gizmodo.com" },
        author: "Claire Wordley on Earther, shared by Brian Kahn to Gizmodo",
        title: "Why Coronavirus Could Lead to More Rhino Poaching",
        description:
          "Live wildlife markets have temporarily closed across China and air pollution is dropping in cities around the world under lockdown due to the coronavirus pandemic. That’s given nature some space to breathe even as the virus takes a toll on humanity. But in so…",
        url:
          "https://earther.gizmodo.com/why-coronavirus-could-lead-to-more-rhino-poaching-1842754861",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/p015yuxs5mzpzmt4dafm.jpg",
        publishedAt: "2020-04-09T13:00:00Z",
        content:
          "Live wildlife markets have temporarily closed across China and air pollution is dropping in cities around the world under lockdown due to the coronavirus pandemic. Thats given nature some space to breathe even as the virus takes a toll on humanity. But in sou… [+6514 chars]",
      },
      {
        source: { id: null, name: "Gizmodo.com" },
        author: "Bryan Menegus",
        title:
          "When It Feels Like Your Boss Values Your Health Less Than the Cost of a Laptop",
        description:
          "This is Sick Days, a series documenting how jobs are changing during the coronavirus pandemic, as told by workers themselves. This week, we hear from some entertainment professionals, a credit union worker, a nanny and part-time baker, and more. If you’d like…",
        url:
          "https://gizmodo.com/when-it-feels-like-your-boss-values-your-health-less-th-1842749787",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/rpnlptc4wgj5zeobkeqg.png",
        publishedAt: "2020-04-09T17:50:00Z",
        content:
          "This is Sick Days, a series documenting how jobs are changing during the coronavirus pandemic, as told by workers themselves. This week, we hear from some entertainment professionals, a credit union worker, a nanny and part-time baker, and more. If youd like … [+14221 chars]",
      },
      {
        source: { id: "mashable", name: "Mashable" },
        author: "Sasha Lekach",
        title:
          "Why Disney's 'Tangled' is the top coronavirus Google search in the U.S.",
        description:
          'Americans clearly have "corona" on their minds. The top trending coronavirus -related search on Google\'s U.S. site in the past day is none other than an inquiry about the 2010 animated Disney movie Tangled. The movie is about Rapunzel — you know, the girl wit…',
        url:
          "https://mashable.com/article/coronavirus-tangled-disney-google-search-trends/",
        urlToImage:
          "https://mondrian.mashable.com/2020%252F03%252F23%252Fb7%252F96f2fa1b72f342faa81c4d32edf9eea4.8c39a.jpg%252F1200x630.jpg?signature=bPSRwuvaC1e3DDNOPneHieEVOOs=",
        publishedAt: "2020-03-23T18:08:35Z",
        content:
          'Americans clearly have "corona" on their minds.\r\nThe top trending coronavirus-related search on Google\'s U.S. site in the past day is none other than an inquiry about the 2010 animated Disney movie Tangled. \r\nThe movie is about Rapunzel you know, the girl wit… [+1315 chars]',
      },
      {
        source: { id: "mashable", name: "Mashable" },
        author: "Jack Morse",
        title:
          "This company you've never heard of says it knows who isn't socially distancing",
        description:
          "As a responsible adult in the midst of the pandemic, you've been doing your part and socially distancing like the experts recommend. But what about, you know, everyone else? A company you've likely never heard of claims that it's able to determine — on an ind…",
        url:
          "https://mashable.com/article/social-distancing-phone-tracking-database/",
        urlToImage:
          "https://mondrian.mashable.com/2020%252F03%252F25%252Ff1%252F6e7931fd7b3844e2b829e0bb4d93ce4e.a2ccb.jpg%252F1200x630.jpg?signature=ClqfyhZlcUZFdUFHM4BPnBdh3m8=",
        publishedAt: "2020-03-25T00:19:15Z",
        content:
          "As a responsible adult in the midst of the pandemic, you've been doing your part and socially distancing like the experts recommend. But what about, you know, everyone else?\r\nA company you've likely never heard of claims that it's able to determine on an indi… [+3053 chars]",
      },
      {
        source: { id: "mashable", name: "Mashable" },
        author: "Rachel Kraus",
        title:
          "iPhone reports of increased screen time during coronavirus are pretty rude TBH",
        description:
          "If you've been turning to your smartphone for connection to the outside world more than usual lately, you're not alone. iPhone users are accustomed to getting a \"Weekly Screen Time Report\" on Sundays. These provide stats about how much time people have spent …",
        url:
          "https://mashable.com/article/iphone-screen-time-reports-coronavirus/",
        urlToImage:
          "https://mondrian.mashable.com/2020%252F03%252F22%252F24%252F742aa54e3aba4985a62450ddbbfe5d95.be528.jpg%252F1200x630.jpg?signature=pky3PQYiiBqqHZ4_LFOc_j4ehMI=",
        publishedAt: "2020-03-22T22:05:32Z",
        content:
          "If you've been turning to your smartphone for connection to the outside world more than usual lately, you're not alone.\r\niPhone users are accustomed to getting a \"Weekly Screen Time Report\" on Sundays. These provide stats about how much time people have spent… [+2854 chars]",
      },
      {
        source: { id: "mashable", name: "Mashable" },
        author: "Anna Iovine",
        title: "Going on a virtual date? Here's how to make it not suck.",
        description:
          "With a third of the world's population staying at home amid the coronavirus pandemic, it's safe to say that there are single folks out there lamenting their dating life. IRL dating is out of the question for many right now, but plenty of people are still down…",
        url: "https://mashable.com/article/how-to-have-a-virtual-date/",
        urlToImage:
          "https://mondrian.mashable.com/2020%252F04%252F11%252F41%252F939c150d4993401fbfee5e62e52cd077.81abb.png%252F1200x630.png?signature=FXpwIYBb4e_Aq2xSwyKgXETLDlY=",
        publishedAt: "2020-04-11T15:00:00Z",
        content:
          "With a third of the world's population staying at home\r\n amid the coronavirus pandemic, it's safe to say that there are single folks out there lamenting their dating life. IRL dating is out of the question for many right now, but plenty of people are still do… [+5262 chars]",
      },
      {
        source: { id: "mashable", name: "Mashable" },
        author: "Nicole Gallucci",
        title:
          "Minimalist proposals and weddings spread joy in coronavirus pandemic",
        description:
          "Proposing to a significant other, planning a wedding, or getting married in the middle of a pandemic is far from ideal. But steadfast romantics around the world are proving that love in the time of coronavirus, though not easy, is still possible. Over the pas…",
        url:
          "https://mashable.com/article/coronavirus-pandemic-proposals-wedding-planning/",
        urlToImage:
          "https://mondrian.mashable.com/2020%252F04%252F06%252F8c%252Fc4c63802f5ec4f1b84ba34578fda8b07.e3c26.png%252F1200x630.png?signature=14jTlJjepUgfj4Y9t8oeZs4EmUQ=",
        publishedAt: "2020-04-06T19:33:12Z",
        content:
          "Proposing to a significant other, planning a wedding, or getting married in the middle of a pandemic is far from ideal. But steadfast romantics around the world are proving that love in the time of coronavirus, though not easy, is still possible.\r\nOver the pa… [+10584 chars]",
      },
      {
        source: { id: "bbc-news", name: "BBC News" },
        author: null,
        title:
          "Eredivisie: Dutch top flight likely to be cancelled after major events ban extended",
        description:
          "The Dutch Football Association “intends not to continue” the Eredivisie season after the national government extended a ban on major events until 1 September.",
        url: "https://www.bbc.co.uk/sport/football/52376543",
        urlToImage:
          "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/6EED/production/_111879382_52376543.jpg",
        publishedAt: "2020-04-21T19:53:35Z",
        content:
          "Ajax are ahead of AZ Alkmaar on goal difference at the top of the Eredivisie\r\nThe Dutch Football Association “intends not to continue” the Eredivisie season after the national government extended a ban on major events until 1 September because of coronavirus.… [+1191 chars]",
      },
      {
        source: { id: "bbc-news", name: "BBC News" },
        author: null,
        title:
          "Bundesliga top four make 20m euro cash pledge to other German clubs",
        description:
          "The Bundesliga's four Champions League clubs pledge 20m euros to support fellow German teams during the coronavirus.",
        url: "https://www.bbc.co.uk/sport/football/52052650",
        urlToImage:
          "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/8CF3/production/_111438063_52052650.jpg",
        publishedAt: "2020-03-26T14:44:20Z",
        content:
          "Borussia Dortmund and Bayern Munich are two of the biggest clubs in Germany\r\nThe four Bundesliga clubs in this season's Champions League have pledged 20m euros (£18.3m) to support fellow German teams during the coronavirus.\r\nBayern Munich, Borussia Dortmund, … [+1867 chars]",
      },
      {
        source: { id: "bbc-news", name: "BBC News" },
        author: "https://www.facebook.com/bbcnews",
        title: "Yemen: Saudi-led coalition announces ceasefire",
        description:
          "The coalition has been fighting against Houthi forces in Yemen since March 2015.",
        url: "https://www.bbc.co.uk/news/world-middle-east-52224358",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/742D/production/_111714792_060861354-1.jpg",
        publishedAt: "2020-04-08T21:32:22Z",
        content:
          "Image copyrightEPA Image caption\r\n The UN had called on both sides to end fighting and ramp up efforts to tackle the coronavirus outbreak\r\nA Saudi Arabian-led coalition fighting Houthi forces in Yemen has declared a ceasefire, according to officials. \r\nSource… [+1865 chars]",
      },
    ],
  },
];

app.get("/api/data", (req, res) => {
  // fetch('https://covidnigeria.herokuapp.com/api')
  //   .then(res => res.json())
  //   .then(data => res.json(data))
  //   .catch(err => console.log(err));

  res.json(data);
});

app.get("/api/news", (req, res) => {
  // var url = `http://newsapi.org/v2/everything?q=corona&from=2020-03-22&sortBy=popularity&apiKey=${process.env.API_KEY}`;

  // fetch(url)
  //     .then(res => res.json())
  //     .then(data => res.json(data))
  //     .catch(err => console.log(err));

  res.json(news);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
