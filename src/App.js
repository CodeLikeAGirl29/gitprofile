import React from 'react';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

function App() {
  return (
    <GitProfile
      config={{
        github: {
          username: 'codelikeagirl29', // Your GitHub org/user name. (Required)
          sortBy: 'updated', // stars | updated
          limit: 8, // How many projects to display.
          exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
          },
        },
        social: {
          linkedin: 'lindsey-howard',
          twitter: 'dev_lindseyk',
          facebook: 'codelikeagirl91',
          instagram: 'fiercely.lindseyy',
          dribbble: 'codelikeagirl91',
          behance: '',
          medium: 'lindseykdev',
          dev: '',
          website: 'https://lindseyk.dev',
          phone: '',
          email: 'codelikeagirl91@gmail.com',
        },
        skills: [
          'React',
          'React Native',
          'JavaScript',
          'Node.js',
          'PostgreSQL',
          'MySQL',
          'Git',
          'Express',
          'CSS',
          'SASS/SCSS',
          'RESTful API',
          'Tailwind',
          'Bootstrap',
        ],
        experiences: [
             {
            company: 'Freelance',
            position: 'Web Developer',
            from: 'April 2021',
            to: 'present',
          },
          {
            company: 'Tristate Media',
            position: 'Marketing & Sales Representative',
            from: 'Oct 2016',
            to: 'April 2021',
          },
          {
            company: 'Navy Federal Credit Union',
            position: 'Software Developer Intern',
            from: 'January 2020',
            to: ' June 2020',
          },
        ],
        education: [
          {
            institution: 'Nucamp Fullstack Course',
            degree: 'Certificate',
            from: '2021',
            to: '2022',
          },
          {
            institution: 'Thinkful Software Development',
            degree: 'Certificate',
            from: '2020',
            to: '2021',
          },
        ],
        // Display blog posts from your medium or dev account. (Optional)
        blog: {
          source: 'medium', // medium | dev
          username: 'lindseykdev',
          limit: 4, // How many posts to display. Max is 10.
        },
        googleAnalytics: {
          // GA3 tracking id/GA4 tag id
          id: 'UA-179589074-1', // UA-XXXXXXXXX-X | G-XXXXXXXXXX
        },
        hotjar: {
          id: '3098963',
          snippetVersion: 6,
        },
        themeConfig: {
          defaultTheme: 'emerald',

          // Hides the theme change switch
          // Useful if you want to support a single color mode
          disableSwitch: false,

          // Should use the prefers-color-scheme media-query,
          // using user system preferences, instead of the hardcoded defaultTheme
          respectPrefersColorScheme: true,

          // Available themes. To remove any theme, exclude from here.
          themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'procyon',
          ],

          // Custom theme
          customTheme: {
            primary: '#fc055b',
            secondary: '#219aaf',
            accent: '#e8d03a',
            neutral: '#2A2730',
            'base-100': '#E3E3ED',
            '--rounded-box': '3rem',
            '--rounded-btn': '3rem',
          },
        },
      }}
    />
  );
}

export default App;
