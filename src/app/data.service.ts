import { Injectable } from '@angular/core';
import { Message } from './message'
@Injectable({ 
  providedIn: 'root'
})
export class DataService {
  createDb() {
    const MESSAGES: Message[] = [
      {
        id: 1,
        title : "Cozy is a modern audiobook player for Linux and macOS",
        author: "miles",
        numberComment: 32,
        time: 1599812913986,
        likeNumber: 50,
        link: "https://github.com/geigi/cozy",
      },
      {
        id: 2,
        title : "Elixir Is Erlang, not Ruby",
        author: "stanislavb",
        numberComment: 87,
        time: 1599468045460,
        likeNumber: 255,
        link: "https://preslav.me/2020/09/06/elixir-is-not-ruby-elixir-is-erlang/",
      },
      {
        id: 3,
        title : "Show HN: AI color palette generator for Tailwindcss",
        author: "manceraio",
        numberComment: 4,
        time: 1599617553078,
        likeNumber: 41,
        link: "https://tailwind.ink/",
      },
      {
        id: 4,
        title : "PostgreSQL B-Tree index deduplication",
        author: "petergeoghegan", 
        numberComment: 12,
        time: 1599468045460,
        likeNumber: 106,
        link: "https://blog.rustprooflabs.com/2020/09/postgres-beta3-btree-dedup",
      },
      {
        id:5,
        title : "Non-Posix File Systems",
        author: "nsm", 
        numberComment: 82,
        time: 1599468757269,
        likeNumber: 55,
        link: "http://ceur-ws.org/Vol-1419/paper0045.pdf",
      },
      {
        id:6,
        title : "What motivates the authors of video game walkthroughs and FAQs? ",
        author: "miobrien", 
        numberComment: 18,
        time: 1599643910519,
        likeNumber: 21,
        link: "https://firstmonday.org/ojs/index.php/fm/article/view/7925/6630",
      },
      {
        id:7,
        title : "The 'brushing' scam that's behind mystery parcels",
        author: "fortran77", 
        numberComment: 128,
        time: 1599643802779,
        likeNumber: 126,
        link: "https://www.bbc.com/news/technology-54055669",
      },
      {
        id:8,
        title : "ProtonDrive Security Model",
        author: "johnnyballgame", 
        numberComment: 50,
        time: 1599643731985,
        likeNumber: 140,
        link: "https://protonmail.com/blog/protondrive-security/",
      },
      {
        id:9,
        title : "The Powder Toy",
        author: "severine", 
        numberComment: 2,
        time: 1599643607726,
        likeNumber: 17,
        link: "https://powdertoy.co.uk/",
      },
      {
        id:10,
        title : "Ad Fraud on LinkedIn",
        author: "sbachman", 
        numberComment: 253,
        time: 1599643540857,
        likeNumber: 422,
        link: "https://www.samueljscott.com/2020/09/08/linkedin-ad-fraud/",
      },
      {
        id:11,
        title : "“I still use WordPerfect 6.2 for DOS ”",
        author: "newducks", 
        numberComment: 31,
        time: 1599643359093,
        likeNumber: 107,
        link: "https://news.ycombinator.com/item?id=24411333",
      },
      {
        id:12,
        title : "Gravitricity–Fast, long-life energy storage",
        author: "lelf", 
        numberComment: 27,
        time: 1599643173561,
        likeNumber: 31,
        link: "https://gravitricity.com/",
      },
      {
        id:13,
        title : "Journalists perceive stories published in local news outlets to be less worthy",
        author: "hhs", 
        numberComment: 55,
        time: 1599643042196,
        likeNumber: 18,
        link: "https://www.niemanlab.org/2020/09/journalists-perceive-stories-published-in-local-news-outlets-to-be-less-newsworthy/",
      },
      {
        id:14,
        title : "Is the web getting slower?",
        author: "oedmarap", 
        numberComment: 144,
        time: 1599642875493,
        likeNumber: 106,
        link: "https://www.debugbear.com/blog/is-the-web-getting-slower",
      },
      {
        id:15,
        title : "AMD Vendor Locks EPYC CPUs",
        author: "virgulino", 
        numberComment: 32,
        time: 1599642875493,
        likeNumber: 60,
        link: "https://www.servethehome.com/amd-psb-vendor-locks-epyc-cpus-for-enhanced-security-at-a-cost/",
      },
      {
        id:16,
        title : "Tech firms face growing resentment of parent employees during Covid-19",
        author: "walterbell", 
        numberComment: 743,
        time: 1599642625495,
        likeNumber: 366,
        link: "https://www.cnet.com/news/tech-firms-face-growing-resentment-toward-parent-employees-during-covid-19/",
      },
      {
        id:17,
        title : "Archaeologists with drones discover pre-Columbian earthworks in Kansas",
        author: "Thevet", 
        numberComment: 9,
        time: 1599642625495,
        likeNumber: 33,
        link: "https://arstechnica.com/science/2020/09/archaeologists-with-drones-discover-pre-columbian-earthworks-in-kansas/",
      },
      {
        id:18,
        title : "Maxima – A Computer Algebra System built with Lisp",
        author: "dragonsh", 
        numberComment: 34,
        time: 1599642625495,
        likeNumber: 8,
        link: "http://maxima.sourceforge.net/",
      },
      {
        id:19,
        title : "A Software Engineer’s Guide to Cybernetics",
        author: "mbellotti", 
        numberComment: 17,
        time: 1599642625495,
        likeNumber: 55,
        link: "https://medium.com/@bellmar/a-software-engineers-guide-to-cybernetics-d57c7def1453",
      },
      {
        id:20,
        title : "Your Phone Is Your Castle",
        author: "0DHm2CxO7Lb3", 
        numberComment: 129,
        time: 1599642625495,
        likeNumber: 265,
        link: "https://puri.sm/posts/your-phone-is-your-castle/",
      },
      {
        id:21,
        title : "What's so hard about PDF text extraction?",
        author: "fagnerbrack", 
        numberComment: 62,
        time: 1599642625495,
        likeNumber: 73,
        link: "https://filingdb.com/b/pdf-text-extraction",
      },
      {
        id:22,
        title : "Oblique Strategies",
        author: "tomasreimers", 
        numberComment: 12,
        time: 1599642625495,
        likeNumber: 69,
        link: "https://www.cnet.com/news/tech-firms-face-growing-resentment-toward-parent-employees-during-covid-19/",
      },
      {
        id:23,
        title : "Teacher's low-tech laptop hack to display handwritten notes for online class ",
        author: "miles", 
        numberComment: 108,
        time: 1599642625495,
        likeNumber: 302,
        link: "https://mothership.sg/2020/09/cd-zoom-hack-camera-teacher/",
      },
      {
        id:24,
        title : "Nvidia to Acquire Arm for $40B ",
        author: "czr", 
        numberComment: 296,
        time: 1599642625495,
        likeNumber: 644,
        link: "https://nvidianews.nvidia.com/news/nvidia-to-acquire-arm-for-40-billion-creating-worlds-premier-computing-company-for-the-age-of-ai",
      }
    ] 
    return {MESSAGES};
  }

  constructor() { }
  
  

}
