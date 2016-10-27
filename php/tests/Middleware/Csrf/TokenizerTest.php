<?php
namespace Tests\Middleware\Csrf;

use Slim\Http\Response;

class TokenizerTest extends \PHPUnit_Framework_TestCase
{

    /**
     * @runInSeparateProcess
     * @preserveGlobalState disabled
     */
    public function testInvoke()
    {
        $tokenizer = new \App\Middleware\Csrf\Tokenizer();

        $response = new Response();

        $request = $this->getMockForAbstractClass('\Psr\Http\Message\ServerRequestInterface');

#        $request->method('getAttribute')->willReturn('');
        $request->expects($this->atLeastOnce())->method('getAttribute');

        $tokenizer->__invoke($request, $response, function(){});
    }

}