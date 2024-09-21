import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const StatusDropdown= () => {
  

  return (
    <Card className="w-[700px] h-[400px] items-center ">
      <CardHeader>
        <CardTitle>Check Status</CardTitle>
      </CardHeader>
      <CardContent>
        <form  className="space-y-4">
          <div className="flex space-x-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="state1">State 1</SelectItem>
                <SelectItem value="state2">State 2</SelectItem>
                <SelectItem value="state3">State 3</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="city1">City 1</SelectItem>
                <SelectItem value="city2">City 2</SelectItem>
                <SelectItem value="city3">City 3</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select pincode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pincode1">Pincode 1</SelectItem>
                <SelectItem value="pincode2">Pincode 2</SelectItem>
                <SelectItem value="pincode3">Pincode 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button >Submit</Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default StatusDropdown