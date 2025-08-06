import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function KitchinsCoaching() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-white text-gray-800 p-6">
      <div className="max-w-4xl mx-auto text-center py-12">
        <img
          src="/logo.png"
          alt="Kitchin's Coaching Logo"
          className="mx-auto w-40 mb-6"
        />
        <h1 className="text-5xl font-bold mb-4">Kitchin’s Coaching</h1>
        <p className="text-xl mb-8">
          Personalised basketball coaching for youth aged 16 and under. Based in
          Melbourne’s South East.
        </p>
        <Button className="text-lg px-6 py-3">Book a Session</Button>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Solo Sessions</h2>
            <p>
              One-on-one training sessions tailored to individual skill levels
              and goals. Great for focused development and rapid improvement.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Group Sessions</h2>
            <p>
              Small group training designed to develop team skills, communication,
              and in-game decision making through drills and scrimmages.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto text-center pb-12">
        <h2 className="text-3xl font-bold mb-4">Areas We Cover</h2>
        <p className="text-lg">
          Servicing Melbourne’s South East suburbs – we come to you! Flexible
          locations and times to suit your schedule.
        </p>
      </div>

      <footer className="text-center text-sm py-6 border-t border-gray-200">
        &copy; {new Date().getFullYear()} Kitchin’s Coaching. All rights reserved.
      </footer>
    </div>
  );
}