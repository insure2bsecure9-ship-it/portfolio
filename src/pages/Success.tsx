import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Building2, Clock, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, Legend
} from "recharts";

const stats = [
  { icon: Clock, value: "4+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Families Protected" },
  { icon: Building2, value: "4", label: "Insurance Partners" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
];

const yearlyGrowth = [
  { year: "2020", clients: 45, policies: 52 },
  { year: "2021", clients: 120, policies: 145 },
  { year: "2022", clients: 210, policies: 268 },
  { year: "2023", clients: 350, policies: 430 },
  { year: "2024", clients: 500, policies: 620 },
];

const policyDistribution = [
  { name: "Health", value: 55 },
  { name: "Life", value: 20 },
  { name: "Vehicle", value: 15 },
  { name: "Travel", value: 10 },
];

const COLORS = ["hsl(160, 60%, 40%)", "hsl(215, 55%, 23%)", "hsl(40, 80%, 55%)", "hsl(340, 60%, 55%)"];

const claimSuccess = [
  { month: "Jan", rate: 94 },
  { month: "Feb", rate: 96 },
  { month: "Mar", rate: 95 },
  { month: "Apr", rate: 97 },
  { month: "May", rate: 96 },
  { month: "Jun", rate: 98 },
  { month: "Jul", rate: 97 },
  { month: "Aug", rate: 98 },
  { month: "Sep", rate: 99 },
  { month: "Oct", rate: 97 },
  { month: "Nov", rate: 98 },
  { month: "Dec", rate: 98 },
];

const satisfactionData = [
  { category: "Advice Quality", score: 98 },
  { category: "Response Time", score: 95 },
  { category: "Claim Support", score: 97 },
  { category: "Transparency", score: 99 },
  { category: "Overall", score: 98 },
];

const testimonials = [
  {
    quote: "Satish guided us through the entire process with patience and transparency. When we needed to file a claim, he was there every step of the way.",
    name: "Rajesh K.",
    role: "Health Insurance Client",
  },
  {
    quote: "Very professional and knowledgeable. He explained every policy detail and helped us choose the best plan for our family's needs.",
    name: "Priya M.",
    role: "Life Insurance Client",
  },
  {
    quote: "I've worked with many advisors but Satish's dedication and follow-up is unmatched. He treats every client like family.",
    name: "Anil S.",
    role: "Group Insurance Client",
  },
];

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center animate-fade-in">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Track Record</p>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold mb-6">
              Built on <span className="text-accent">Trust & Results</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Our commitment to integrity and client welfare is reflected in the numbers.
              Explore our growth, analytics, and client success stories.
            </p>
          </div>
        </section>

        {/* Stats counters */}
        <section className="py-12 bg-emerald-light">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="text-center bg-background rounded-xl p-6 shadow-sm animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <s.icon size={22} className="text-accent" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-foreground">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Analytics</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Growth & Performance</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Client Growth Chart */}
              <Card className="shadow-sm animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={18} className="text-accent" />
                    <CardTitle className="font-sans text-lg">Client & Policy Growth</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={yearlyGrowth}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 25%, 90%)" />
                      <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="clients" name="Clients" fill="hsl(160, 60%, 40%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="policies" name="Policies" fill="hsl(215, 55%, 23%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Policy Distribution */}
              <Card className="shadow-sm animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield size={18} className="text-accent" />
                    <CardTitle className="font-sans text-lg">Policy Distribution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={policyDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, value }) => `${name} ${value}%`}
                      >
                        {policyDistribution.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Claim Success Rate */}
              <Card className="shadow-sm animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-accent" />
                    <CardTitle className="font-sans text-lg">Claim Success Rate (2024)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={claimSuccess}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 25%, 90%)" />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                      <YAxis domain={[90, 100]} tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="rate"
                        name="Success Rate %"
                        stroke="hsl(160, 60%, 40%)"
                        fill="hsl(160, 60%, 40%)"
                        fillOpacity={0.15}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Satisfaction Scores */}
              <Card className="shadow-sm animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-accent" />
                    <CardTitle className="font-sans text-lg">Client Satisfaction Scores</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={satisfactionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 25%, 90%)" />
                      <XAxis dataKey="category" tick={{ fontSize: 11 }} />
                      <YAxis domain={[90, 100]} tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="score"
                        name="Score %"
                        stroke="hsl(215, 55%, 23%)"
                        strokeWidth={2}
                        dot={{ fill: "hsl(160, 60%, 40%)", r: 5 }}
                        activeDot={{ r: 7 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold">What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 animate-fade-in"
                  style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
                >
                  <blockquote className="text-primary-foreground/80 italic leading-relaxed mb-4">
                    "{t.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-primary-foreground">{t.name}</p>
                    <p className="text-sm text-primary-foreground/50">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;
