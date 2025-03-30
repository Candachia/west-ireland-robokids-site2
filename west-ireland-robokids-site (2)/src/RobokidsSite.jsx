import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { motion } from "framer-motion";

export const config = {
  runtime: 'edge',
};

export const metadata = {
  title: 'West Ireland Robokids Ltd',
  description: 'Inspiring kids in Ireland through robotics, coding and STEAM activities.'
};

export const revalidate = 60;

export const dynamic = 'force-dynamic';

export const generateStaticParams = async () => {
  return [];
};

export default function RobokidsSite() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted. Thank you!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center"
      >
        West Ireland Robokids Ltd
      </motion.h1>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p>
            West Ireland Robokids Ltd is a STEM educational club dedicated to children in Ireland, focused on robotics, coding, science, and creativity. We aim to inspire the next generation of innovators through hands-on, safe, and fun workshops.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Activities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Robotics and coding workshops for children aged 6-12</li>
            <li>Building LEGO® robots and controlling them with code</li>
            <li>STEAM activities (Science, Technology, Engineering, Arts, Math)</li>
            <li>Weekend workshops and after-school clubs</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Contact & Enrollment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Parent's Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Contact Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Message / Child's Age / Workshop Interest"
              value={form.message}
              onChange={handleChange}
              required
            />
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-2 text-sm text-gray-600">
          <p><strong>Email:</strong> contact@westirelandrobokids.ie</p>
          <p><strong>Phone:</strong> 089 123 4567</p>
          <p><strong>Location:</strong> Tuam, Co. Galway, Ireland</p>
          <p><strong>Policies:</strong> GDPR | Terms & Conditions | Refund Policy</p>
        </CardContent>
      </Card>
    </div>
  );
}
