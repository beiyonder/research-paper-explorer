import { Search } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { MathComponent } from "./components/math"

export default function ResearchViewer() {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-[350px_1fr] bg-[#1e1e1e] text-white">
      {/* Left Panel */}
      <div className="border-r border-[#333333]">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search papers..."
              className="pl-8 bg-[#252526] border-[#333333] text-sm"
            />
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <div className="group cursor-pointer rounded-md bg-[#37373d] p-3">
                <h3 className="font-semibold text-[#cccccc]">
                  Attention Is All You Need
                </h3>
                <p className="text-sm text-[#858585]">NeurIPS • 2017</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-[#264f78] hover:bg-[#264f78]/80">
                    transformers
                  </Badge>
                  <Badge variant="secondary" className="bg-[#264f78] hover:bg-[#264f78]/80">
                    attention
                  </Badge>
                  <Badge variant="secondary" className="bg-[#264f78] hover:bg-[#264f78]/80">
                    deep-learning
                  </Badge>
                </div>
              </div>
              {/* More paper items would go here */}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Right Panel */}
      <ScrollArea className="h-screen">
        <div className="prose prose-invert max-w-none p-8">
          <h1 className="mb-2 text-4xl font-bold text-white">
            Attention Is All You Need
          </h1>
          <p className="text-[#858585]">
            Ashish Vaswani, Noam Shazeer, Niki Parmar • NeurIPS 2017
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Abstract</h2>
          <p className="text-[#cccccc]">
            The dominant sequence transduction models are based on complex recurrent or convolutional neural
            networks that include an encoder and a decoder. The best performing models also connect the encoder and
            decoder through an attention mechanism...
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Summary</h2>
          <p className="text-[#cccccc]">
            Introduces the Transformer architecture, which revolutionized natural language processing by replacing
            recurrent neural networks with self-attention mechanisms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Key Equations</h2>
          <div className="my-4 p-4 bg-[#252526] rounded-md overflow-x-auto">
            <MathComponent>
              {"\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V"}
            </MathComponent>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Implementation</h2>
          <pre className="bg-[#252526] p-4 rounded-md overflow-x-auto">
            <code className="text-sm text-[#cccccc]">
              {`import torch
import torch.nn as nn

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super().__init__()
        self.num_heads = num_heads
        self.d_model = d_model`}
            </code>
          </pre>
        </div>
      </ScrollArea>
    </div>
  )
}

