"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const VirtualTryOn = () => {
  const [personImage, setPersonImage] = useState(null);
  const [garmentImage, setGarmentImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePersonImageUpload = (e) => {
    setPersonImage(e.target.files[0]);
    setResultImage(null); // 重置结果图像
  };

  const handleGarmentImageUpload = (e) => {
    setGarmentImage(e.target.files[0]);
    setResultImage(null); // 重置结果图像
  };

  const handleSubmit = async () => {
    if (!personImage || !garmentImage) {
      alert('请上传人物图像和衣服图像');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('person_img', personImage);
    formData.append('garment_img', garmentImage);
    formData.append('seed', 0);
    formData.append('randomize_seed', true);

    try {
      const response = await fetch('/api/virtual-try-on', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      setResultImage(result.image);
    } catch (error) {
      console.error('Error:', error);
      alert('生成图片失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle>虚拟换装工具</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="file"
                onChange={handlePersonImageUpload}
                accept="image/*"
                className="mb-2"
              />
              <p className="text-sm text-gray-500">上传人物图像</p>
              {personImage && (
                <img
                  src={URL.createObjectURL(personImage)}
                  alt="人物图像"
                  className="max-w-full h-auto mt-2"
                />
              )}
            </div>
            <div>
              <Input
                type="file"
                onChange={handleGarmentImageUpload}
                accept="image/*"
                className="mb-2"
              />
              <p className="text-sm text-gray-500">上传衣服图像</p>
              {garmentImage && (
                <img
                  src={URL.createObjectURL(garmentImage)}
                  alt="衣服图像"
                  className="max-w-full h-auto mt-2"
                />
              )}
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                生成中...
              </>
            ) : (
              '生成换装图片'
            )}
          </Button>
          {resultImage && (
            <div className="mt-4">
              <img src={resultImage} alt="换装结果" className="max-w-full h-auto" />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VirtualTryOn;