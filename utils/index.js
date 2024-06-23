export const checkImageURL = (url) => {
    if(!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url);
    }
}

export const data = [
    {
        job_id: 1,
        employer_logo: '',
        employer_name: 'Encarta',
        job_title: 'Software Developer',
        job_country: 'Ghana',
        job_employment_type: 'Remote',
        job_description: 'Perform any duty assigned to you by your boss',
        job_highlights: { 
                Qualifications: ['BSc Computer Science'] 
            }
    },
    {
        job_id: 2,
        employer_logo: '',
        employer_name: 'Microverse',
        job_title: 'Mentor',
        job_country: 'Nigeria',
        job_employment_type: 'Full Time',
        job_description: 'Perform any duty assigned to you by your boss',
        job_highlights: { 
            Qualifications: ['React Native'] 
        }
    },
    {
        job_id: 3,
        employer_logo: '',
        employer_name: 'Microsoft',
        job_title: 'Code Reviewer',
        job_country: 'Nairobi',
        job_employment_type: 'Contract',
        job_description: 'Perform any duty assigned to you by your boss',
        job_highlights: { 
            Qualifications: ['JavaScript'] 
        }
    },
    {
        job_id: 4,
        employer_logo: '',
        employer_name: 'Google',
        job_title: 'Frontend Developer',
        job_country: 'Cameroon',
        job_employment_type: 'Temporal',
        job_description: 'Perform any duty assigned to you by your boss',
        job_highlights: { 
            Qualifications: ['Ruby on Rails'] 
        }
    },
    {
        job_id: 5,
        employer_logo: '',
        employer_name: 'Ayoba',
        job_title: 'Marketer',
        job_country: 'Ukraine',
        job_employment_type: 'Full Time',
        job_description: 'Perform any duty assigned to you by your boss',
        job_highlights: { 
            Qualifications: ['Next JS'] 
        }
    },
    {
        job_id: 6,
        employer_logo: '',
        employer_name: 'Amazon',
        job_title: 'Product Analyst',
        job_country: 'Mauritania',
        job_employment_type: 'Remote',
        job_description: 'Perform any duty assigned to you by your boss',
        job_highlights: { 
            Qualifications: ['React'] 
        }
    }
]