<template>
  <div class="relative isolate">
    <!-- Background -->
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-4xl pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Get In Touch
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Ready to bring your mobile app ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2">
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              I'm always excited to discuss new projects and opportunities. Feel free to reach out!
            </p>
            
            <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Email</span>
                  <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </dt>
                <dd>
                  <a class="hover:text-gray-900" href="mailto:ajshantudas@gmail.com">
                    ajshantudas@gmail.com
                  </a>
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Phone</span>
                  <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </dt>
                <dd>
                  <a class="hover:text-gray-900" href="tel:+8801741646717">
                    +880 174 164 6717
                  </a>
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Location</span>
                  <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </dt>
                <dd>Dhaka, Bangladesh</dd>
              </div>
            </dl>

            <!-- Professional Details -->
            <div class="mt-12">
              <h3 class="text-lg font-semibold text-gray-900">Professional Details</h3>
              <dl class="mt-4 space-y-2 text-sm text-gray-600">
                <div class="flex justify-between">
                  <dt>Current Position:</dt>
                  <dd class="font-medium text-gray-900">Senior Software Engineer</dd>
                </div>
                <div class="flex justify-between">
                  <dt>Company:</dt>
                  <dd class="font-medium text-gray-900">Patrons Venture Limited</dd>
                </div>
                <div class="flex justify-between">
                  <dt>Experience:</dt>
                  <dd class="font-medium text-gray-900">8+ Years</dd>
                </div>
                <div class="flex justify-between">
                  <dt>Specialization:</dt>
                  <dd class="font-medium text-gray-900">Android, Flutter, AI</dd>
                </div>
              </dl>
            </div>

            <!-- Social Links -->
            <div class="mt-12">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h3>
              <div class="flex gap-4">
                <a 
                  href="https://github.com/shantudas" 
                  target="_blank"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <span class="sr-only">GitHub</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/shantu-das" 
                  target="_blank"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="rounded-2xl bg-gray-50 p-10">
            <h3 class="text-lg font-semibold text-gray-900 mb-6">Send me a message</h3>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                  <div class="mt-2.5">
                    <input 
                      type="text" 
                      name="first-name" 
                      id="first-name" 
                      v-model="contactForm.firstName"
                      autocomplete="given-name" 
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                  <div class="mt-2.5">
                    <input 
                      type="text" 
                      name="last-name" 
                      id="last-name" 
                      v-model="contactForm.lastName"
                      autocomplete="family-name" 
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    v-model="contactForm.email"
                    autocomplete="email" 
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label for="subject" class="block text-sm font-semibold leading-6 text-gray-900">Subject</label>
                <div class="mt-2.5">
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    v-model="contactForm.subject"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                <div class="mt-2.5">
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="4" 
                    v-model="contactForm.message"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    required
                  ></textarea>
                </div>
              </div>
              <button 
                type="submit" 
                class="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Background decoration -->
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
// SEO
useHead({
  title: 'Contact - Shantu Chandra Das',
  meta: [
    { name: 'description', content: 'Get in touch with Shantu Chandra Das for mobile app development projects. Expert in Android, Flutter, and AI integration.' }
  ]
})

const contactForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Create mailto link with form data
  const mailtoLink = `mailto:ajshantudas@gmail.com?subject=${encodeURIComponent(contactForm.value.subject)}&body=${encodeURIComponent(`
Name: ${contactForm.value.firstName} ${contactForm.value.lastName}
Email: ${contactForm.value.email}

Message:
${contactForm.value.message}
  `)}`
  
  window.location.href = mailtoLink
  
  // Show success message
  alert('Email client opened! Thank you for your interest. I\'ll get back to you soon.')
  
  // Reset form
  contactForm.value = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>