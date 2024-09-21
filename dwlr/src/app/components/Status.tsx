import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Status = () => {
  return (
    <div className="flex flex-row space-x-4">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-sm">Total DWLR Installed</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="text-2xl font-bold">500</p>
          <FaArrowUp size= {30} className="text-green-500" />
        </CardContent>
      </Card>
      
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-sm">Running DWLR</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="text-2xl font-bold">450</p>
          <FaArrowUp size= {30} className="text-green-500" />
        </CardContent>
      </Card>
      
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-sm">Refining DWLR</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="text-2xl font-bold">50</p>
          <FaArrowDown  size= {30} className="text-red-500" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Status;
