import React, { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const VirtualTryOn = () => {
  const [userImage, setUserImage] = useState<File | null>(null);
  const [clothImage, setClothImage] = useState<File | null>(null);
  const [category, setCategory] = useState('upper_body');
  const [caption, setCaption] = useState('');

  const handleImageUpload = (setter: React.Dispatch<React.SetStateAction<File | null>>) => (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    // Implement the submission logic here
    console.log('Submitting:', { userImage, clothImage, category, caption });
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-purple-600">Try-On</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-purple-600 mb-2">User Image *</label>
          <Card className="h-64 flex items-center justify-center">
            <CardContent className="text-center">
              {userImage ? (
                <img src={URL.createObjectURL(userImage)} alt="User" className="max-h-48 mx-auto" />
              ) : (
                <>
                  <div className="mb-4">
                    <svg className="mx-auto h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <Button onClick={() => document.getElementById('userImageUpload')?.click()}>
                    Upload
                  </Button>
                  <Input
                    id="userImageUpload"
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload(setUserImage)}
                    accept="image/*"
                  />
                </>
              )}
            </CardContent>
          </Card>
          <p className="text-sm text-gray-500 mt-2">Upload an image, size up to 5MB.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-600 mb-2">Cloth Image *</label>
          <Card className="h-64 flex items-center justify-center">
            <CardContent className="text-center">
              {clothImage ? (
                <img src={URL.createObjectURL(clothImage)} alt="Cloth" className="max-h-48 mx-auto" />
              ) : (
                <>
                  <div className="mb-4">
                    <svg className="mx-auto h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <Button onClick={() => document.getElementById('clothImageUpload')?.click()}>
                    Upload
                  </Button>
                  <Input
                    id="clothImageUpload"
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload(setClothImage)}
                    accept="image/*"
                  />
                </>
              )}
            </CardContent>
          </Card>
          <p className="text-sm text-gray-500 mt-2">Upload an image, size up to 5MB.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block text-sm font-medium text-purple-600 mb-2">Category *</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upper_body">Upper Body</SelectItem>
              <SelectItem value="lower_body">Lower Body</SelectItem>
              <SelectItem value="full_body">Full Body</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-600 mb-2">Caption</label>
          <Input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="e.g. red, T-shirt"
          />
        </div>
      </div>
      <div className="mt-6">
        <Button onClick={handleSubmit} className="bg-purple-600 text-white">
          Try On
        </Button>
        <span className="ml-4 text-sm text-gray-500">1 credit cost</span>
      </div>
    </div>
  );
};

export default VirtualTryOn;