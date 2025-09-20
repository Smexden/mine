import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, Github, Instagram, MapPin, Calendar, User, GraduationCap, Briefcase, Code, Star } from "lucide-react"

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Section */}
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white/20">
                <AvatarImage
                  src="/images/dennis-profile.jpg"
                  alt="Dennis Musyoka"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-slate-600 text-white">
                  DM
                </AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Dennis Musyoka</h1>
                <p className="text-xl text-slate-200 mb-4">Software Developer & Student</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>musyokadennis860@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>+254 715 837 099</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User size={20} />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <a
                    href="mailto:musyokadennis860@gmail.com"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <Mail size={18} className="text-slate-600" />
                    <span className="text-sm">musyokadennis860@gmail.com</span>
                  </a>
                  <a
                    href="tel:+254715837099"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <Phone size={18} className="text-slate-600" />
                    <span className="text-sm">+254 715 837 099</span>
                  </a>
                  <a
                    href="https://github.com/Smexden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <Github size={18} className="text-slate-600" />
                    <span className="text-sm">github.com/Smexden</span>
                  </a>
                  <a
                    href="https://instagram.com/Smex_den"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <Instagram size={18} className="text-slate-600" />
                    <span className="text-sm">@Smex_den</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code size={20} />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star size={20} />
                  Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Web Development</p>
                  <p>• Mobile App Development</p>
                  <p>• Open Source Projects</p>
                  <p>• UI/UX Design</p>
                  <p>• Technology Innovation</p>
                  <p>• Continuous Learning</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  I am a passionate software developer and second-year student at the Cooperative University of Kenya.
                  I have a strong interest in web development, mobile applications, and emerging technologies.
                  I enjoy creating innovative solutions and am always eager to learn new technologies and frameworks.
                  My goal is to contribute to meaningful projects that make a positive impact on society.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap size={20} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-slate-200 pl-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">Cooperative University of Kenya</h3>
                        <p className="text-slate-600">Bachelor's Degree in Computer Science</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                          <Calendar size={16} />
                          <span>2024 - Present (Second Year)</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">
                          <MapPin size={16} />
                          <span>Nairobi, Kenya</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="ml-4">Current</Badge>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">
                      Currently pursuing a comprehensive degree in Computer Science with focus on software development,
                      algorithms, data structures, and modern programming practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase size={20} />
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold mb-2">Personal Portfolio Website</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      A responsive portfolio website built with modern web technologies to showcase projects and skills.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Next.js</Badge>
                      <Badge variant="outline" className="text-xs">TypeScript</Badge>
                      <Badge variant="outline" className="text-xs">Tailwind CSS</Badge>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold mb-2">University Management System</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      A web application for managing student records and course information for university administration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">React</Badge>
                      <Badge variant="outline" className="text-xs">Node.js</Badge>
                      <Badge variant="outline" className="text-xs">MongoDB</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-slate-600 mb-4">
                Let's connect and build something amazing together!
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline">
                  <a href="https://github.com/Smexden" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:musyokadennis860@gmail.com">
                    <Mail size={16} className="mr-2" />
                    Email Me
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
