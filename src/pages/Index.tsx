const Index = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-lg shadow-soft p-6 border">
            <h3 className="text-lg font-semibold mb-2 text-foreground">System Status</h3>
            <p className="text-muted-foreground">All systems operational</p>
            <div className="mt-3 h-2 bg-green-100 rounded-full">
              <div className="h-2 bg-green-500 rounded-full w-full"></div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-soft p-6 border">
            <h3 className="text-lg font-semibold mb-2 text-foreground">Reports</h3>
            <p className="text-muted-foreground">12 new reports available</p>
            <div className="mt-3 text-2xl font-bold text-primary">12</div>
          </div>
          
          <div className="bg-card rounded-lg shadow-soft p-6 border">
            <h3 className="text-lg font-semibold mb-2 text-foreground">Feedback</h3>
            <p className="text-muted-foreground">5 pending reviews</p>
            <div className="mt-3 text-2xl font-bold text-primary">5</div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg shadow-soft p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Welcome to ESQM (DLIFE)</h2>
          <p className="text-muted-foreground">
            Your dashboard provides an overview of system status, reports, and feedback. 
            Use the navigation panel to access different sections of the application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
