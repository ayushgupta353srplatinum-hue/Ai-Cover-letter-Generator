# AI Cover Letter Generator – Development Notes

This project focuses on building a simple and professional AI-based cover letter generator while following proper security practices.

## Project Goal

The goal was to create a web application that generates customized cover letters using user input such as name, job role, company name, and skills.

## Initial Approach (Mock AI)

The project was first implemented using a mock AI approach to understand form handling and logic.

A predefined template string was dynamically filled using user input.

**Example Template:**
Dear Hiring Manager at [Company Name],

I am [Candidate Name] applying for the role of [Job Role].
My skills in [Key Skills] make me a suitable candidate.

Sincerely,
[Candidate Name]

This helped validate JavaScript logic, data handling, and copy-to-clipboard functionality.

## Real AI Integration

### Gemini API Attempt

The Google Gemini API (Free Tier) was initially explored. However, multiple issues were faced, including:
- Model access errors (404)
- API version mismatches
- Free-tier limitations

Due to inconsistent responses, this approach was not reliable for the project.

## Final AI Solution

To ensure stable and consistent results, the project was migrated to **OpenRouter**, an OpenAI-compatible API.

**Reason for choosing OpenRouter:**
- Stable free-tier access
- Simple backend integration
- Reliable AI-generated output
- Allowed under internship guidelines

## AI Prompt Strategy

A dynamic prompt is generated using user input:
Write a professional cover letter for [Name] applying to [Company] for the role of [Role], highlighting skills in [Skills].

## Security Measures

- API keys are stored in a `.env` file
- Keys are not exposed in frontend code
- Backend handles all API communication

## UI & Logic

- Clean and professional UI
- Input form for candidate details
- Loading indicator during AI response
- Output displayed in a copyable text box

## Conclusion

This project demonstrates practical problem-solving by adapting to API limitations and delivering a secure, working AI-based solution that meets both Level 1 and Level 2 internship requirements.

